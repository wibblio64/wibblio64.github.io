(() => {
    const sounds = [
        new Audio("/assets/sounds/hey.ogg"),
        new Audio("/assets/sounds/meat.ogg"),
        new Audio("/assets/sounds/poetry.ogg"),
        new Audio("/assets/sounds/sam.ogg"),
        new Audio("/assets/sounds/shoot.ogg"),
        new Audio("/assets/sounds/swiss.ogg"),
        new Audio("/assets/sounds/time.ogg"),
        new Audio("/assets/sounds/tinylegs.ogg"),
        new Audio("/assets/sounds/twocanplay.ogg"),
        new Audio("/assets/sounds/watchout.ogg"),
        new Audio("/assets/sounds/yes.ogg")
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
})();