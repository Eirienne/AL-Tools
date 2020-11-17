/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

$(function () {
    $("#navbar-placeholder").load("Navbar.html");
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (e.target.matches('.dropbtn')) {

        var myDropdown = document.getElementById("myDropdown");

        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}

// if ($(window).width() < 1024) {
//     $(".page-wrapper").removeClass("toggled");
// } else if ($(window).width() > 1024){
//     // $(".page-wrapper").addClass("toggled");
// }