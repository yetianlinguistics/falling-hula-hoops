document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.falling-container');
    const createFallingHulaHoop = () => {
        const hulaHoop = document.createElement('img');
        hulaHoop.src = 'hulahoop.png'; // Replace with your direct image link
        hulaHoop.classList.add('hula-hoop');
        hulaHoop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        hulaHoop.style.animationDuration = `${5 + Math.random() * 5}s`; // Random fall duration between 5 and 10 seconds
        container.appendChild(hulaHoop);

        // Remove the image after it has fallen
        hulaHoop.addEventListener('animationend', () => {
            hulaHoop.remove();
        });
    };

    setInterval(createFallingHulaHoop, 2000); // Create a new hula hoop every 2000ms
});
