(() => {
    const sounds = {
        meow: new Audio("/sounds/meow.mp3")
    };

    function onClick() {
        const sound = sounds.meow.cloneNode();
        sound.play();
    }

    const nepeta = document.createElement("div");
    nepeta.addEventListener("click", onClick);
    document.body.appendChild(nepeta);

    let x = 0;
    let y = 0;
    let width = 187;
    let height = 220;
    let velocity = { x: 5, y: 0 };
    let gravity = 0.5;
    let jumpHeight = 7;
    let direction = 1;

    (function update() {
        x += velocity.x * direction;
        y += velocity.y;
        velocity.y -= gravity;

        if (x < 0) {
            x = 0;
            direction = 1;
        } else if (x > window.innerWidth - width) {
            x = window.innerWidth - width;
            direction = -1;
        }

        if (y < 0) {
            y = 0;
            velocity.y = jumpHeight;
        }

        nepeta.style.position = "absolute";
        nepeta.style.width = `${width}px`;
        nepeta.style.height = `${height}px`;
        nepeta.style.background = `no-repeat url("/images/nepeta_run.gif")`;
        nepeta.style.cursor = "pointer";
        nepeta.style.left = `${x}px`;
        nepeta.style.bottom = `${y}px`;
        nepeta.style.transform = `scaleX(${direction})`;

        setTimeout(update, 1000 / 60);
    })();
})();