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