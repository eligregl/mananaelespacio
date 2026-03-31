function renderNav() {
    const nav = document.querySelector('nav');
    
    if (!nav) return;
    
    const navItems = [
        { href: '/index.html', text: 'Inicio' },
        { href: '/bio.html', text: 'Bio' },
        { href: '/noticias.html', text: 'Noticias' },
        { href: '/shows.html', text: 'Shows' },
        { href: '/contacto.html', text: 'Contacto' }
    ];
    
    const navHTML = navItems.map(item => 
        `<a href="${item.href}">${item.text}</a>`
    ).join('');
    
    nav.innerHTML = navHTML;
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNav);
} else {
    renderNav();
}