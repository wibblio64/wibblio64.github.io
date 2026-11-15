// max
const sounds = [
    new Audio("/sounds/hey.ogg"),
    new Audio("/sounds/meat.ogg"),
    new Audio("/sounds/poetry.ogg"),
    new Audio("/sounds/sam.ogg"),
    new Audio("/sounds/shoot.ogg"),
    new Audio("/sounds/swiss.ogg"),
    new Audio("/sounds/time.ogg"),
    new Audio("/sounds/tinylegs.ogg"),
    new Audio("/sounds/twocanplay.ogg"),
    new Audio("/sounds/watchout.ogg"),
    new Audio("/sounds/yes.ogg")
];

function onClick() {
    for (const sound of sounds) {
        sound.currentTime = 0;
        sound.pause();
    }

    const sound = sounds[Math.floor(Math.random() * sounds.length)];
    sound.play();
}

const max = document.getElementById("max");
max.addEventListener("click", onClick);

// nepeta
const meowSound = new Audio("/sounds/meow.mp3");

const nepeta = {
    el: document.getElementById("nepeta"),
    x: 0,
    y: 0,
    width: 187,
    height: 220,
    velocity: { x: 4, y: 0 },
    gravity: 0.5,
    direction: 1,
    update: function() {
        this.x += this.velocity.x * this.direction;
        this.y += this.velocity.y;
        this.velocity.y -= this.gravity;

        if (this.x < 0) {
            this.x = 0;
            this.direction = 1;
        } else if (this.x > window.innerWidth - this.width) {
            this.x = window.innerWidth - this.width;
            this.direction = -1;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity.y = 5;
        }

        this.el.style.left = `${this.x}px`;
        this.el.style.bottom = `${this.y}px`;
        this.el.style.transform = `scaleX(${this.direction})`;
    },
    onClick() {
        const sound = meowSound.cloneNode();
        sound.play();
    }
};

function update() {
    nepeta.update();

    setTimeout(update, 1000 / 60);
}

update();

nepeta.el.addEventListener("click", nepeta.onClick);