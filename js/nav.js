function renderNav() {
    const nav = document.querySelector('nav');
    
    if (!nav) return;
    
    const navItems = [
        { href: '/', text: 'Inicio' },
        { href: '/bio', text: 'Bio' },
        { href: '/noticias', text: 'Noticias' },
        { href: '/shows', text: 'Shows' },
        { href: '/contacto', text: 'Contacto' }
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