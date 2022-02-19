function popoutbio(button) {
    var x = button.id;
    bios = document.getElementsByClassName("bio");
    bios[x].style.visibility = "visible";
}

function exit() {
    bios = document.getElementsByClassName("bio");
    for (let i = 0; i < bios.length; i++) {
        bios[i].style.visibility = "hidden";
    }
}
