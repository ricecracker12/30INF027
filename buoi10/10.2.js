function toggleMenu() {
    var submenu = document.getElementById("submenu");
    if (submenu.classList.contains("show")) {
        submenu.classList.remove("show");
    } else {
        submenu.classList.add("show");
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}