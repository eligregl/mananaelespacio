// COMPONENTS.JS - Lógica de componentes interactivos

// ==================== REPRODUCTOR DE AUDIO ====================
class AudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.currentTrackIndex = 0;
        this.tracks = siteData.music.tracks;
        this.isPlaying = false;
        
        this.initElements();
        this.initAudio();
        this.attachEvents();
    }
    
    initElements() {
        this.playBtn = document.querySelector('.play-btn');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.trackTitle = document.querySelector('.track-title');
        this.trackAlbum = document.querySelector('.track-album');
        this.trackYear = document.querySelector('.track-year');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressFill = document.querySelector('.progress-fill');
    }
    
    initAudio() {
        this.loadTrack(0);
        
        // Event listeners del audio
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.next());
        
        // NO hay autoplay - el usuario debe dar play manualmente
    }
    
    loadTrack(index) {
        const track = this.tracks[index];
        this.audio.src = track.file;
        this.trackTitle.textContent = track.title;
        
        // Actualizar nombre del disco y año desde siteData
        if (this.trackAlbum) {
            this.trackAlbum.textContent = siteData.music.currentAlbum;
        }
        if (this.trackYear) {
            const currentAlbum = siteData.discography.find(album => album.title === siteData.music.currentAlbum);
            this.trackYear.textContent = currentAlbum ? currentAlbum.year : '';
        }
        
        this.currentTrackIndex = index;
    }
    
    play() {
        const playPromise = this.audio.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isPlaying = true;
                this.playBtn.textContent = '⏸';
            }).catch(error => {
                // Autoplay bloqueado, esperamos interacción del usuario
                console.log('Autoplay bloqueado:', error);
                this.isPlaying = false;
                this.playBtn.textContent = '▶';
            });
        }
    }
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.playBtn.textContent = '▶';
    }
    
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    prev() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) this.play();
    }
    
    next() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) this.play();
    }
    
    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.progressFill.style.width = `${progress}%`;
    }
    
    seek(event) {
        const rect = this.progressBar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percentage = clickX / rect.width;
        this.audio.currentTime = percentage * this.audio.duration;
    }
    
    attachEvents() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        this.progressBar.addEventListener('click', (e) => this.seek(e));
    }
}

// ==================== NAVEGACIÓN SUAVE ====================
class SmoothScroll {
    constructor() {
        this.initLinks();
    }
    
    initLinks() {
        const links = document.querySelectorAll('nav a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ==================== FORMULARIO DE CONTACTO ====================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.initForm();
    }
    
    initForm() {
        if (!this.form) return;
        
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        
        // FormSubmit maneja el envío
        fetch(this.form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                this.showSuccess();
            } else {
                this.showError();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            this.showError();
        });
    }
    
    showSuccess() {
        this.form.innerHTML = `
            <div class="form-success-90s">
                <h3>✓ MENSAJE ENVIADO</h3>
                <p>Gracias por escribirnos.</p>
                <p>Te responderemos pronto.</p>
            </div>
        `;
    }
    
    showError() {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
    }
}

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar reproductor
    const player = new AudioPlayer();
    
    // Inicializar navegación suave
    const smoothScroll = new SmoothScroll();
    
    // Inicializar formulario
    const contactForm = new ContactForm();
});