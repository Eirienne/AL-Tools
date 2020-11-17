$("#characters").change(function () {
    $("#characters option:selected").each(function () {
        var characters = "";
        characters += $(this).text();

        var img = document.getElementById("char-icon-img")
        console.log(characters);
        switch (characters) {
            case "--Select--":
                img.src = "/Images/Logo/None.png";
                document.getElementById("plane1number").value = 0;
                document.getElementById("plane2number").value = 0;
                document.getElementById("plane3number").value = 0;
                break;

            case "Akagi":
                img.src = "/Images/AzurLane/Icon/AkagiIcon.png";
                document.getElementById("plane1number").value = 3;
                document.getElementById("plane2number").value = 3;
                document.getElementById("plane3number").value = 2;
                break;

            case "Akagi (Muse)":
                img.src = "/Images/AzurLane/Icon/Akagi_µIcon.png";
                document.getElementById("plane1number").value = 3;
                document.getElementById("plane2number").value = 3;
                document.getElementById("plane3number").value = 2;
                break;
        };
    });
})