function getSlot(selection) {
    var chacracters = selection.options[selection.selectedIndex].text;
    var img = document.getElementById("char-icon-img")

    switch (chacracters) {
        case "--Select--":
            img.src = "../Images/Logo/None.png";
            document.getElementById("plane1number").value = 0;
            document.getElementById("plane2number").value = 0;
            document.getElementById("plane3number").value = 0;
            break;
    
        case "Akagi":
            img.src = "../Images/Azur Lane Characters Icon/AkagiIcon.png";
            document.getElementById("plane1number").value = 3;
            document.getElementById("plane2number").value = 3;
            document.getElementById("plane3number").value = 2;         
            break;
    }
}