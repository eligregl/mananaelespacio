// APP.JS - Renderiza el contenido dinámicamente desde data.js

const App = {
    init() {
        this.renderBio();
        this.renderNews();
        this.renderDiscography();
        this.renderShows();
        this.renderSocial();
    },
    
    // Renderizar Bio
    renderBio() {
        const bioContent = document.getElementById('bio-content');
        if (bioContent) {
            bioContent.innerHTML = siteData.bio.content;
        }
    },
    
    // Renderizar Noticias
    renderNews() {
        const newsContainer = document.getElementById('news-container');
        if (!newsContainer) return;
        
        const newsHTML = siteData.news.map(item => `
            <article class="news-card ${item.type}">
                <div class="news-image">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                </div>
                <div class="news-content">
                    <div class="news-header">
                        <div class="news-meta">
                            <span class="news-type ${item.type}">
                                ${item.type === 'review' ? 'Reseña' : 'Lanzamiento'}
                            </span>
                            <span class="news-date">${item.date}</span>
                        </div>
                        <h3 class="news-title">${item.title}</h3>
                    </div>
                    <p class="news-excerpt">${item.excerpt}</p>
                    <a href="${item.link}" class="news-link" target="_blank" rel="noopener">
                        ${item.linkText} →
                    </a>
                </div>
            </article>
        `).join('');
        
        newsContainer.innerHTML = newsHTML;
    },
    
    // Renderizar Discografía
    renderDiscography() {
        const discoContainer = document.getElementById('disco-container');
        if (!discoContainer) return;
        
        const discoHTML = siteData.discography.map(album => `
            <div class="vintage-card" style="text-align: center; max-width: 500px; margin: 0 auto;">
                <div class="album-cover">
                    <img src="${album.cover}" alt="${album.title}" loading="lazy">
                </div>
                <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem; position: relative; z-index: 1;">${album.title}</h3>
                <p style="color: var(--lavender); margin-bottom: 1.5rem; position: relative; z-index: 1;">${album.year}</p>
                <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                    <a href="${album.links.spotify}" class="btn-vintage" target="_blank" rel="noopener">SPOTIFY</a>
                    <a href="${album.links.bandcamp}" class="btn-vintage btn-vintage-purple" target="_blank" rel="noopener">BANDCAMP</a>
                    <a href="${album.links.youtube}" class="btn-vintage btn-vintage-pink" target="_blank" rel="noopener">YOUTUBE</a>
                </div>
            </div>
            ${siteData.discography.length === 1 ? `` : ''}
        `).join('');
        
        discoContainer.innerHTML = discoHTML;
    },
    
    // Renderizar Shows
    renderShows() {
        // Próximo show
        const nextShowContainer = document.getElementById('next-show');
        if (nextShowContainer) {
            if (siteData.shows.upcoming) {
                const show = siteData.shows.upcoming;
                nextShowContainer.innerHTML = `
                    <h3>★ PRÓXIMO SHOW ★</h3>
                    <div class="next-show-content">
                        <div class="show-title">MAÑANA EL ESPACIO</div>
                        <div class="show-details">
                            <div class="show-info show-date">${show.date} • ${show.time}</div>
                            <div class="show-info show-venue">${show.venue}</div>
                            <div class="show-info show-address">${show.address}</div>
                            <div class="show-info show-city">${show.city}</div>
                        </div>
                        <div class="ticket-info">
                            <div class="ticket-badge">${show.ticketText}</div>
                            <a href="${show.ticketLink}" class="btn-tickets" target="_blank" rel="noopener">
                                MÁS INFO →
                            </a>
                        </div>
                    </div>
                `;
            } else {
                nextShowContainer.innerHTML = `
                    <div class="next-show-content">
                        <div class="show-title">PRÓXIMAMENTE</div>
                        <div class="show-details">
                            <div class="show-info">Nuevas fechas en camino...</div>
                        </div>
                    </div>
                `;
            }
        }
        
        // Shows pasados
        const pastShowsGrid = document.getElementById('past-shows-grid');
        if (!pastShowsGrid || !siteData.shows.past) return;
        
        const pastShowsHTML = siteData.shows.past.map((show, showIndex) => `
            <div class="past-show-card">
                <div class="show-card-header">
                    <div class="show-card-date">${show.date}</div>
                    <div class="show-card-venue">${show.venue} • ${show.city}</div>
                </div>
                <div class="show-carousel" data-carousel="${showIndex}">
                    <div class="carousel-track">
                        ${show.photos.map((photo, photoIndex) => `
                            <div class="carousel-slide">
                                <img src="${photo}" alt="${show.venue} - ${show.date}" loading="lazy">
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-btn carousel-btn-prev" data-carousel="${showIndex}">‹</button>
                    <button class="carousel-btn carousel-btn-next" data-carousel="${showIndex}">›</button>
                    <div class="carousel-indicators">
                        ${show.photos.map((_, index) => `
                            <div class="carousel-indicator ${index === 0 ? 'active' : ''}" data-carousel="${showIndex}" data-slide="${index}"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        pastShowsGrid.innerHTML = pastShowsHTML;
        
        // Inicializar carousels
        this.initCarousels();
    },
    
    // Inicializar funcionalidad de carousels
    initCarousels() {
        const carousels = document.querySelectorAll('.show-carousel');
        
        carousels.forEach(carousel => {
            const carouselIndex = carousel.dataset.carousel;
            const track = carousel.querySelector('.carousel-track');
            const slides = carousel.querySelectorAll('.carousel-slide');
            const prevBtn = carousel.querySelector('.carousel-btn-prev');
            const nextBtn = carousel.querySelector('.carousel-btn-next');
            const indicators = carousel.querySelectorAll('.carousel-indicator');
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            const updateCarousel = () => {
                track.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Actualizar indicadores
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentSlide);
                });
            };
            
            const nextSlide = () => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            };
            
            const prevSlide = () => {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateCarousel();
            };
            
            const goToSlide = (index) => {
                currentSlide = index;
                updateCarousel();
            };
            
            // Event listeners
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => goToSlide(index));
            });
            
            // Navegación con teclado
            carousel.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') prevSlide();
                if (e.key === 'ArrowRight') nextSlide();
            });
        });
    },
    
    // Renderizar Redes Sociales
    renderSocial() {
        const socialContainer = document.querySelector('.social-links');
        if (!socialContainer) return;
        
        const socialHTML = Object.entries(siteData.social).map(([platform, url]) => 
            `<a href="${url}" target="_blank" rel="noopener">${platform}</a>`
        ).join('');
        
        socialContainer.innerHTML = socialHTML;
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});