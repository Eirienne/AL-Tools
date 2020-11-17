$("#characters").change(function () {
    $("#characters option:selected").each(function () {
        var characters = "";
        characters += $(this).text();

        var img = document.getElementById("char-icon-img")
        // console.log(characters);

        $.getJSON("/JSON/AL-char.json", function (data) {

            var char = data;

            $.each(char, function () {
                // console.log(this.name);
                // console.log(this.reload);

                if (characters == this.name) {
                    // console.log(this.image);
                    if (this.image == null) {
                        this.image = "Images/Logo/None.png"
                    }

                    img.src = this.image;

                    if (this.slot1 == null || this.slot2 == null || this.slot3 == null) {
                        this.slot1 = 0;
                        this.slot2 = 0;
                        this.slot3 = 0;
                    }

                    document.getElementById("plane1number").value = this.slot1;
                    document.getElementById("plane2number").value = this.slot2;
                    document.getElementById("plane3number").value = this.slot3;
                }
            });

        }).fail(function () {
            console.log("An error has occurred.");
        });
    });
})