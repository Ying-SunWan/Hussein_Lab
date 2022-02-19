function popoutbio(button) {
    var x = button.id;
    console.log(x);
    bios = document.getElementsByClassName("bio");
    bios[x].style.visibility = "visible";
}