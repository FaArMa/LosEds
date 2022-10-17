function NavMenu() {
    // Le agrego una clase o le elimino todas las clases
    let x = document.getElementById("navbar");
    if (x.className == "")
        x.className = "navbar-responsive";
    else
        x.className = "";
}
