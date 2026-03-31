// DATA.JS - Toda la información del sitio en un solo lugar
// Edita aquí para actualizar el contenido sin tocar el HTML

const siteData = {
    // Información de la banda
    band: {
        name: "MAÑANA EL ESPACIO",
        email: "mananaelespacio@gmail.com"
    },

    // Tracks del reproductor
    music: {
        currentAlbum: "Casi Nada Es Para Siempre",
        tracks: [
            {
                title: "Cosas Normales",
                file: "assets/audio/cosasnormales.mp3" 
            },
            {
                title: "Celebran Por Nosotros", 
                file: "assets/audio/celebranpornosotros.mp3" 
            },
            {
                title: "Navegando El Vacío",
                file: "assets/audio/navegandoelvacio.mp3"
            },
            {
                title: "Estrellas Fugaces",
                file: "assets/audio/estrellasfugaces.mp3" 
            }
        ]
    },

    // Biografía
    bio: {
        title: "Bio",
        content: `
            <p>Mañana El Espacio es un grupo de indiepop radicado en Medellín desde 2022, con origen en Caracas, Venezuela.</p>
            <p>En 2022, salió a la luz su disco debut <em>Casi Nada Es Para Siempre</em>, editado en físico y en plataformas digitales por el sello estadounidense Jigsaw Records.</p>
            <p>Ese mismo año, el grupo es preseleccionado para participar en el Festival Contempopránea en España; y se traslada de Venezuela a Colombia, donde se ha presentado en Medellín y Bogotá.</p>
            <p>En 2026 lanzaron el sencillo "Cuidado Perro Triste", en colaboración con el artista urbano del mismo nombre, quien hizo la portada del sencillo. Este tema fue grabado en Echoes Sounds en Medellín y mezclado por Eva María López del grupo español Linda Guilala en Vigo, España.</p>
        `
    },

    // Noticias
    news: [
        {
            date: "27 JUL 2022",
            type: "review",
            title: '"Un gran descubrimiento" - Cloudberry Records',
            excerpt: '"Un álbum soberbio y una gran sorpresa, por supuesto, ya que proviene de un país que normalmente no produce bandas de indiepop."',
            link: "https://www.cloudberryrecords.com/blog/?p=12944",
            linkText: "LEER COMPLETA",
            image: "assets/images/cloudberry-review.png"
        },
        {
            date: "20 JUL 2022",
            type: "review",
            title: '"Jangly twee-pop given extra bite" - Janglepophub',
            excerpt: '"Un sonido dominante de riffs jangly entrelazados con tempos twee-pop. Es jangly twee-pop al que se le da suficiente mordida extra para llevarlo a otro lugar."',
            link: "https://janglepophub.home.blog/2022/07/20/album-review-casi-nada-es-para-siempre-by-manana-el-espacio-2022-jigsaw-records/",
            linkText: "LEER COMPLETA",
            image: "assets/images/janglepophub-review.png"
        },
        {
            date: "2022",
            type: "review",
            title: '"South American Jangle Pop" - Zero Vu',
            excerpt: '"Ever wondered what Sonic Youth would sound like if they played jangle pop and sang in Spanish? Wonder no more."',
            link: "https://zerovu.blog/south-american-jangle-pop-a-brief-introduction/",
            linkText: "LEER COMPLETA",
            image: "assets/images/cloudberry-review.png"
        }
    ],

    // Discografía
    discography: [
        {
            title: "Casi Nada Es Para Siempre",
            year: "2022",
            cover: "assets/images/Portadadisco.jpg",
            links: {
                spotify: "open.spotify.com/intl-es/artist/37hKyWHoSR14jr6RqGEbhi?si=0c1UFux8Ta2CjTXDUAhOzg&nd=1",
                bandcamp: "mananaelespacio.bandcamp.com/",
                youtube: "youtube.com/@mananaelespacio",
                tidal: "tidal.com/artist/29206585",
                appleMusic: "music.apple.com/us/artist/ma%C3%B1ana-el-espacio/1594070037",
                youtubeMusic: "music.youtube.com/channel/UCoaYYVzEp2QtmDm4AAzF-Mw"
            }
        }
        // Agrega más discos aquí cuando salgan
    ],

    // Shows
    shows: {
        upcoming: null,
        past: [
            {
                date: "31 OCT 2025",
                time: "",
                venue: "Rock Y Ciencia - Universidad EAFIT",
                city: "Medellín",
                photos: [
                    "assets/images/E.jpg",
                    "assets/images/DSC_0344.jpg",
                    "assets/images/DSC_0349.jpg"
                ]
            },
            {
                date: "25 OCT 2025",
                time: "8:00 PM",
                venue: "Bacalao Beer Project",
                city: "Envigado",
                photos: [
                    "assets/images/20251025_205551.jpg",
                    "assets/images/20251025_223012.jpg"
                ]
            },
            {
                date: "01 FEB 2024",
                time: "",
                venue: "La Pared",
                city: "Caracas, Venezuela",
                photos: [
                    "assets/images/D.jpg"
                ]
            }
        ]
    },

    // Redes sociales
    social: {
        facebook: "https://facebook.com/mananaelespacio/",
        instagram: "https://instagram.com/mananaelespacio/",
        spotify: "https://open.spotify.com/intl-es/artist/37hKyWHoSR14jr6RqGEbhi?si=0c1UFux8Ta2CjTXDUAhOzg&nd=1",
        bandcamp: "https://mananaelespacio.bandcamp.com/",
        youtube: "https://youtube.com/@mananaelespacio"
    }
};

// Exportar para usar en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteData;
}