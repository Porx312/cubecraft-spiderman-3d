const $objectSpiderman = document.querySelector(".container-body");
let rotateX = 0;
let rotateY = 0;

window.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (e.keyCode === 39) { // Tecla derecha (rotación hacia la derecha)
        rotateY += 10;
        $objectSpiderman.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }

    if (e.keyCode === 37) { // Tecla izquierda (rotación hacia la izquierda)
        rotateY -= 10;
        $objectSpiderman.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }

    if (e.keyCode === 38) { // Tecla arriba (rotación hacia arriba)
        rotateX += 10;
        $objectSpiderman.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }

    if (e.keyCode === 40) { // Tecla abajo (rotación hacia abajo)
        rotateX -= 10;
        $objectSpiderman.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
});



// animation keybord

function addTransition(e) {
    const key = document.querySelector(`.classKey[data-key="${e.keyCode}"]`);
    if (key) {
        key.classList.add("active");
    }
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("active");
}

const keys = document.querySelectorAll(".classKey");
keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", addTransition);
