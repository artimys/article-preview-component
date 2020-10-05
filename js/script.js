controls = {
    divBottomContent: ".content-bot",
    classTurnOnSocial: "turn-on-share-options"
};

document.querySelector("body").addEventListener('click', function() {
    var bottomContent = document.querySelector(controls.divBottomContent);

    if (bottomContent.classList.contains(controls.classTurnOnSocial)) {
        bottomContent.classList.remove(controls.classTurnOnSocial);
    }
});


document.querySelector(".share-button").addEventListener('click', function(e) {
    var bottomContent = document.querySelector(controls.divBottomContent);

    if (bottomContent.classList.contains(controls.classTurnOnSocial)) {
        bottomContent.classList.remove(controls.classTurnOnSocial);
    } else {
        bottomContent.classList.add(controls.classTurnOnSocial);
    }
    e.stopPropagation();
})