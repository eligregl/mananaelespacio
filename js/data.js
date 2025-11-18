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
            <p>Mañana El Espacio es una banda musical originaria de Venezuela que ha logrado destacarse en la escena independiente gracias a su talento y habilidad para fusionar diferentes géneros y crear un sonido auténtico y distintivo. Su música es una mezcla de indie pop, dream pop y garage indiepop, con un toque latino que le da a su música un sabor original y especial.
            </p><p>
            Aunque su álbum debut fue grabado en casa, la calidad de su producción es excepcional gracias a la habilidad del líder de la banda, Ricardo, para utilizar diferentes capas de instrumentos y efectos en las guitarras. El resultado es una mezcla de sonidos interesantes, que logran crear una atmósfera única en cada una de sus canciones.
            </p><p>
            El sello discográfico Jigsaw Records, conocido por descubrir y promover nuevas bandas independientes, se fijó en Mañana El Espacio como uno de sus más recientes descubrimientos. Su música, aunque no se ajusta a la típica música jangle-pop de América Latina, logra capturar la atención de los amantes de la música indie gracias a su sonido jangly-twee pop y la voz suave y demure en español que le da un toque de autenticidad a su música.
            </p><p>
            Su sonido es una mezcla de influencias que van desde bandas como The Field Mice, Pains of Being Pure at Heart y Catwalk, pero logran crear su propia identidad musical con su sonido original.
            </p><p>
            Su sonido auténtico y distintivo, su estética única y su habilidad para crear atmósferas interesantes en sus canciones, hacen que sean una banda prometedora en la escena independiente.</p>
        `
    },

    // Noticias
    news: [
        {
            date: "27 JUL 2022",
            type: "review",
            title: '"Un gran descubrimiento" - Cloudberry Cake',
            excerpt: '"Un álbum soberbio y una gran sorpresa, por supuesto, ya que proviene de un país que normalmente no produce bandas de indiepop."',
            link: "https://cloudberrycake.blogspot.com/2022/07/gargoyles.html",
            linkText: "LEER COMPLETA",
            image: "assets/images/cloudberry-review.png"
        },
        {
            date: "20 JUL 2022",
            type: "review",
            title: '"Jangly twee-pop given extra bite" - Janglepophub',
            excerpt: '"Un sonido dominante de riffs jangly entrelazados con tempos twee-pop. Es jangly twee-pop al que se le da suficiente mordida extra para llevarlo a otro lugar."',
            link: "https://janglepophub.com/album-review-casi-nada-es-para-siempre-by-manana-el-espacio-2022-jigsaw-records/",
            linkText: "LEER COMPLETA",
            image: "assets/images/janglepophub-review.png"
        }
    ],

    // Discografía
    discography: [
        {
            title: "Casi Nada Es Para Siempre",
            year: "2021",
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
        upcoming: {
            date: "15 NOV 2024",
            time: "6:30 PM",
            venue: "Santo & Seña",
            address: "Carrera 4 No. 54A-10",
            city: "Bogotá, Colombia",
            ticketLink: "https://casasantoysena.com/producto/concierto-manana-el-espacio/",
            ticketText: "ENTRADA LIBRE"
        },
        past: [
            {
                date: "25 OCT 2025",
                time: "8:00 PM",
                venue: "Bacalao Beer Project",
                city: "Envigado",
                photos: [
                    "assets/images/20251025_205551.jpg",
                    "assets/images/20251025_204850.jpg",
                    "assets/images/20251025_223012.jpg"
                ]
            },
            {
                date: "06 DIC 2024",
                time: "9:00 PM",
                venue: "Bacalao Beer Project",
                city: "Envigado",
                photos: [
                    "assets/images/20250516-000016690019.jpg",
                    "assets/images/20250516-000016690023.jpg",
                    "assets/images/20250516-000016690024.jpg"
                ]
            },
            {
                date: "19 OCT 2024",
                time: "8:00 PM",
                venue: "Bacalao Beer Project",
                city: "Envigado",
                photos: [
                    "assets/images/DSCN0945.JPG",
                    "assets/images/DSCN0956.JPG",
                    "assets/images/DSCN0978.JPG"
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