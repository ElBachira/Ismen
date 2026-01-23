document.addEventListener('DOMContentLoaded', () => {
    
    // --- 0. SISTEMA DE SONIDOS UI OPTIMIZADO ---
    const sfxHover = document.getElementById('sfx-hover');
    const sfxClick = document.getElementById('sfx-click');
    const sfxOpen = document.getElementById('sfx-open');

    // Función auxiliar no bloqueante
    const playSound = (audioEl) => {
        if(audioEl) {
            audioEl.currentTime = 0;
            audioEl.volume = 0.3; 
            // Promesa sin espera para no bloquear UI
            audioEl.play().catch(() => {}); 
        }
    };

    // Usar 'passive: true' mejora rendimiento de scroll en móviles si se usara ahí
    // Delegación de eventos para mejor performance
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.ui-trigger')) {
            playSound(sfxClick);
        }
    });

    document.querySelectorAll('.ui-trigger-hover').forEach(el => {
        el.addEventListener('mouseenter', () => playSound(sfxHover), { passive: true });
    });

    // --- 1. PANTALLA DE CARGA ---
    const loader = document.getElementById('loader');
    
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                playSound(sfxOpen);
            }, 800);
        }, 1500); // Reducido un poco para sensación de rapidez
    }

    // --- 2. SISTEMA DE REPRODUCTOR DE MÚSICA ---
    const songs = [
        {
            title: "Penélope",
            artist: "Diego Torres",
            src: "song.mp3", 
            lyrics: `Penélope
Con su bolso de piel marrón
Y sus zapatos de tacón
Y su vestido de domingo
Penélope
Se sienta en un banco del andén
Y espera que llegue el primer tren
Meneando el abanico
Dicen en el pueblo que un caminante paró
Su reloj
Una tarde de primavera
Adiós, amor mío, no me llores, volveré
Antes que
De los sauces caigan las hojas
Piensa en mí, volveré
Por ti
Pobre infeliz
Se paró tu reloj infantil
Una tarde plomiza de abril
Cuando se fue tu amante
Se marchitó
En tu huerto hasta la última flor
No hay ni un sauce en la calle mayor
Para Penélope
Penélope
Tristeza a fuerza de esperar
Tus ojos parecen brillar
Si un tren silba a lo lejos
Penélope
Uno tras otro los ve pasar
Mira sus caras, les oye hablar
Para ella son muñecos
Dicen en el pueblo que el caminante volvió
La encontró
En su banco de pino verde
La llamó: "Penélope, mi amante fiel, mi paz
Deja ya
De tejer sueños en tu mente"
"Mírame, soy tu amor
Regresé"
Le sonrió
Con los ojos llenitos de ayer
"No era así su cara ni su piel
Tú no eres quien yo espero..."
Y se quedó
Con su bolso de piel marrón
Y sus zapatitos de tacón
Sentada en la estación
Sentada en la estación`,
            meaning: `¿Alguna vez has sentido que el tiempo se detiene en un recuerdo, como si tu vida entera estuviera atrapada en esa versión idealizada de alguien que ya no existe, y cada día que pasa te roba un pedazo más de cordura? ¿Cuántas noches has pasado revisando fotos viejas, aferrándote a esa imagen de juventud y pasión, solo para darte cuenta de que la realidad te ha dejado sentada en un banco eterno, esperando un tren que nunca llega?

Esa es la puñalada profunda de esta canción: la melancolía brutal de aferrarte a un amor que se congeló en el pasado, enloqueciéndote poco a poco porque no puedes soltar esa versión romántica de la persona que amabas cuando todo era fresco, vibrante y lleno de promesas. Pero el tiempo no espera, wey, y mientras tú te quedas ahí, estancada, el mundo gira y esa persona cambia, se arruga, se transforma en algo que ya no encaja en tu sueño perfecto. Es como si tu reloj se hubiera parado en esa tarde de primavera, y ahora vives en un loop de nostalgia que te chupa la vida.

Piensa en esto, real y crudo: imagínate que eres esa mujer que conoció a su amor en los veintes, cuando él era todo fuego y aventuras, con esa sonrisa que iluminaba habitaciones enteras y un toque que te hacía sentir invencible. Se va, promete volver, y tú esperas. Pasan años: tú envejeces sola, con arrugas que marcan cada día de ausencia, el jardín de tu vida se seca, no queda ni una flor. Y un día regresa, pero ya no es él. Su cara está marcada por el tiempo, su piel no brilla como antes, sus ojos llevan el peso de otras vidas. Lo miras y piensas: "Este no es mi amor, este es un extraño que se parece a un fantasma". Le sonríes con ojos llenos de ayer, pero rechazas la realidad porque prefieres la ilusión que te mantiene viva, aunque te esté matando por dentro. Quedas ahí, sentada en la estación de tu propia mente, con tu bolso viejo y tus zapatos que ya no caminan a ningún lado, porque soltar significa admitir que perdiste.

O toma un ejemplo más cotidiano y triste: esa relación que terminó hace una década, pero tú sigues comparando a todos con cómo era él en su mejor momento. Recuerdas sus chistes tontos, esa forma de besarte que te derretía, y cada nuevo intento de amor falla porque nadie mide up a ese ideal juvenil. Te encierras, evitas salir, y poco a poco te conviertes en una versión de Penélope: triste a fuerza de esperar, viendo pasar trenes de oportunidades que para ti son solo muñecos sin alma. Tus amigos te dicen "muévete, wey, ya pasó", pero tú insistes en que volverá esa chispa, que algún día aparecerá alguien que reviva ese recuerdo. Y mientras, te enloqueces: ansiedad que no te deja dormir, depresión que te clava en la cama, una obsesión que te aleja de la vida real. Es patético y humano a la vez, porque aferrarse duele menos que soltar al principio, pero al final te deja hueca.

Pero escúchame bien, porque aquí va la verdad que duele pero libera: tú no eres una pobre infeliz condenada a esa estación. Ese aferrarte no es lealtad, es autodestrucción disfrazada de romanticismo. Mereces más que vivir de migajas de memoria. Tú vales una vida plena, no un reloj parado. Imagina soltar: borrar esas fotos, quemar las cartas mentales, y darte cuenta de que el amor real no se congela en el pasado; evoluciona, crece, y si no lo hace, no era amor, era solo una ilusión que te usó como ancla.

Tú tienes fuerza para levantarte de ese banco, wey. Has sobrevivido años de espera, eso ya te hace resiliente como la mierda. Valida eso: tu corazón latió por algo puro una vez, y eso no se borra, pero no te define. Eres más que un recuerdo; eres presente, con arrugas que cuentan historias de supervivencia, ojos que aún pueden brillar por algo nuevo. Deja de tejer sueños en tu mente y empieza a caminar. El próximo tren podría ser tuyo, no el de un fantasma. Ámate lo suficiente para elegir la realidad sobre la melancolía – duele como el demonio al principio, pero al final te devuelve la libertad. Tú puedes, porque ya has esperado lo suficiente; ahora es tiempo de vivir.`
        }
    ];

    let currentIdx = 0;
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-pause-btn');
    const playerContainer = document.querySelector('.music-player-container');
    
    const titleEl = document.getElementById('song-title');
    const artistEl = document.getElementById('song-artist');
    const lyricsEl = document.getElementById('lyrics-content');
    const meaningEl = document.getElementById('meaning-content');

    function loadSong(index) {
        if (!titleEl || !artistEl || !lyricsEl || !meaningEl) return;
        const s = songs[index];
        titleEl.innerText = s.title;
        artistEl.innerText = s.artist;
        if(audio) audio.src = s.src;
        lyricsEl.innerText = s.lyrics;
        meaningEl.innerText = s.meaning;
    }

    loadSong(currentIdx);

    if (playBtn && audio) {
        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    if(playerContainer) playerContainer.classList.add('playing');
                }).catch(e => console.log("Interacción requerida o error", e));
            } else {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
                if(playerContainer) playerContainer.classList.remove('playing');
            }
        });
    }

    // --- 3. GALERÍA DE BOTS ---
    const maleGrid = document.getElementById('bots-masculinos');
    const femaleGrid = document.getElementById('bots-femeninos');
    const myName = "Archibald"; 

    if (maleGrid && femaleGrid) {
        if (typeof BOTS_LIST !== 'undefined' && Array.isArray(BOTS_LIST)) {
            const fragMale = document.createDocumentFragment();
            const fragFemale = document.createDocumentFragment();

            BOTS_LIST.forEach(bot => {
                if (!bot.nombre.includes(myName)) {
                    const item = document.createElement('a');
                    item.href = bot.url || '#';
                    item.className = 'bot-item ui-trigger'; 
                    // Animación optimizada
                    item.style.animation = `fadeIn 0.5s ease forwards`; 
                    
                    item.innerHTML = `
                        <img src="${bot.imagen}" loading="lazy" alt="${bot.nombre}">
                        <span>${bot.nombre}</span>
                    `;

                    if (bot.genero === 'masculino') fragMale.appendChild(item);
                    else fragFemale.appendChild(item);
                }
            });
            maleGrid.appendChild(fragMale);
            femaleGrid.appendChild(fragFemale);
        } else {
            maleGrid.innerHTML = '<p style="color:#555; font-size:0.8rem;">Sin conexión...</p>';
        }
    }

    // --- 4. STICKER INTERACTIVO ---
    const sticker = document.getElementById('honk-sticker');
    const honkAudio = new Audio('https://www.myinstants.com/media/sounds/honk-sound.mp3'); 
    
    if (sticker) {
        sticker.addEventListener('click', () => {
            honkAudio.currentTime = 0;
            honkAudio.volume = 0.5;
            honkAudio.play().catch(() => {});
            
            // Usamos clases CSS si fuera posible, pero mantener JS simple está bien
            sticker.style.transform = "scale(0.8) rotate(-20deg)";
            setTimeout(() => sticker.style.transform = "", 150);
        });
    }

    // --- 5. UTILIDADES UI (Tabs & Acordeones) ---
    // Funciones globales para onlick en HTML
    window.openOverlay = (id) => {
        playSound(sfxOpen);
        const el = document.getElementById(id);
        if(el) requestAnimationFrame(() => el.classList.add('active'));
    };
    
    window.closeOverlay = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if(el) el.classList.remove('active');
    };

    window.toggleFold = (id) => {
        playSound(sfxClick);
        const el = document.getElementById(id);
        if (el) {
            // Cierra otros con suavidad
            document.querySelectorAll('.foldable').forEach(f => {
                if(f.id !== id) f.classList.remove('active');
            });
            // Usa requestAnimationFrame para asegurar que el navegador esté listo para pintar
            requestAnimationFrame(() => {
                el.classList.toggle('active');
            });
        }
    };
});
