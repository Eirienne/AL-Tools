// List of planes
$(document).ready(function () {

    var list1 = document.getElementById("plane1");
    var list2 = document.getElementById("plane2");
    var list3 = document.getElementById("plane3");

    // Slot Prefix
    list1.options[0] = new Option("First Slot")
    list1.options[0].disabled = true;
    list2.options[0] = new Option("Second Slot")
    list2.options[0].disabled = true;
    list3.options[0] = new Option("Third Slot")
    list3.options[0].disabled = true;

    var $select1 = $("#plane1");
    var $select2 = $("#plane2");
    var $select3 = $("#plane3");

    $.getJSON("JSON/AL-Planes.json", function (data) {

        var char = data;
        var tempType = "Fighters";
        $.each(char, function () {
            // console.log(this.type + "Type")
            // console.log(tempType + "Temp");
            if (this.reload == 0 && this.type != "Don't Use") {
                tempType = this.type;
                $select1.append('<option disabled value=' + this.reload + '>' + this.name + '</option>');
                $select2.append('<option disabled value=' + this.reload + '>' + this.name + '</option>');
                $select3.append('<option disabled value=' + this.reload + '>' + this.name + '</option>');
            }
            else if (tempType == this.type) {
                $select1.append('<option value=' + this.reload + '>' + this.name + '</option>');
                $select2.append('<option value=' + this.reload + '>' + this.name + '</option>');
                $select3.append('<option value=' + this.reload + '>' + this.name + '</option>');
            } else {
                tempType = this.type;
                $select1.append('<option disabled value=' + this.reload + '>' + this.name + '</option>');
                $select2.append('<option disabled value=' + this.reload + '>' + this.name + '</option>');
                $select3.append('<option disabled value=' + this.reload + '>' + this.name + '</option>');
            }
        });

    }).fail(function () {
        console.log("An error has occurred.");
    });
})