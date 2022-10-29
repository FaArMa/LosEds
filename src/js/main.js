window.onload = function() {
    // Para el nav de todas las páginas
    document.querySelector("#navbar > a").onclick = navMenu;
    // Solo para la página de Episodios
    if (window.location.pathname.match(/episodes.html/))
        tableRowHover();
    // Solo para la página de Episodios
    if (window.location.pathname.match(/gallery.html/)) {
        lightbox.option({
            "albumLabel": "Imagen %1 de %2",
            "fadeDuration": 250,
            "imageFadeDuration": 250,
            "wrapAround": true
        });
    }
};

function navMenu() {
    // Le agrego una clase o le elimino todas las clases
    const x = this.parentElement;
    if (x.className === "")
        x.className = "navbar-responsive";
    else
        x.className = "";
    // El usuario no volverá arriba de todo por hacer clic al nav-icon
    return false;
}

function tableRowHover() {
    // Con CSS le doy hover a toda la fila, pero necesito de esto cuando se toca la tercer celda!
    const td = document.querySelectorAll("td:only-child");
    td.forEach(
        function(x) {
            x.onmouseover = function() {
                this.parentElement.previousElementSibling.style.backgroundColor = "#EBEBEB";
            };
        }
    );
    td.forEach(
        function(x) {
            x.onmouseleave = function() {
                this.parentElement.previousElementSibling.style.backgroundColor = "";
            };
        }
    );
}

function showFormData() {
    // Mostrar lo que escribió el usuario en el formulario y retornar falso para que no se envíe
    alert("# Nombre\n" + document.getElementById("name").value + "\n\n# Correo electrónico\n" + document.getElementById("email").value + "\n\n# Mensaje\n" + document.getElementById("msg").value);
    return false;
}
