// Array de mensajes positivos y chistes infantiles
const mensajes = [
    "¡Eres capaz de lograr cosas increíbles! 🌟",
    "¡Nunca dejes de soñar y de jugar! 🎈",
    "¿Qué le dice un pez a otro pez? ¡Nada! 🐟",
    "¡Tu sonrisa ilumina el mundo! 😊",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter. 🐦",
    "¡Hoy es un gran día para aprender algo nuevo! 📚",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 🐝",
    "¡Eres único y especial, nunca lo olvides! ❤️",
    "¿Cuál es el colmo de un electricista? No encontrar la corriente de la historia. ⚡",
    "¡Sigue siempre tu corazón y llegarás muy lejos! 🚀",
    "¿Qué le dice un semáforo a otro? ¡No me mires que me estoy cambiando! 🚦",
    "¡La magia está dentro de ti! ✨"
];

document.addEventListener('DOMContentLoaded', () => {
    const btnGenerar = document.getElementById('btn-generar');
    const mensajeElement = document.getElementById('mensaje-sonrisa');

    if (btnGenerar && mensajeElement) {
        btnGenerar.addEventListener('click', () => {
            // Seleccionar un mensaje aleatorio
            const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
            const mensajeSeleccionado = mensajes[indiceAleatorio];

            // Animación de desvanecimiento
            mensajeElement.classList.remove('fade-in-message');
            
            // Un pequeño retraso para reiniciar la animación
            setTimeout(() => {
                mensajeElement.textContent = mensajeSeleccionado;
                mensajeElement.classList.add('fade-in-message');
            }, 50);

            // Efecto de Confeti mágico
            lanzarConfeti();
        });
    }
});

function lanzarConfeti() {
    // Usamos canvas-confetti (ya importado en el HTML)
    if (typeof confetti === 'function') {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
    }
}
