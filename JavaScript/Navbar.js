/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

$(function () {
    $("#nav-placeholder-home").load("Pages/Template/NavbarHome.html");
});

$(function () {
    $("#nav-placeholder-pages").load("Template/navbarPages.html");
});

$(function () {
    $("#nav-placeholder-azurlane").load("../Template/NavbarAzurLane.html");
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {

        var myDropdown = document.getElementById("myDropdown");

        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}