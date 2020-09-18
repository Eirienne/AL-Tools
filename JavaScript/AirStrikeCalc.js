// $(document).ready(function () {

//     var list1 = document.getElementById('characters');

//     list1.options[0] = new Option('--Select--', '0');
//     list1.options[1] = new Option('Akagi', '131');
//     list1.options[2] = new Option('Akagi (Muse)', '131');
//     list1.options[3] = new Option('Akagi-chan', '124');
//     list1.options[4] = new Option('Akagi (Muse)', '131');
//     list1.options[5] = new Option('Akagi (Muse) Akagi (Muse)', '131');

// });

// var options = ["1", "2", "3", "4", "5"];
// $('#characters').empty();
// $.each(options, function(i, p) {
//     $('#characters').append($('<option></option>').val(p).html(p));
// });


// $(document).ready(function () {
//     var select = document.getElementById("characters"); 
//     var options = ["1", "2", "3", "4", "5"]; 
// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     var el = document.createElement("option");
//     el.textContent = opt;
//     el.value = opt;
//     select.appendChild(el);
// }​
// });

function getPlaneCD() {
    var x = document.getElementById("plane1").value;
    document.getElementById("plane1cd").value = x;
}

function getPlane2CD() {
    var x = document.getElementById("plane2").value;
    document.getElementById("plane2cd").value = x;
}

function getPlane3CD() {
    var x = document.getElementById("plane3").value;
    document.getElementById("plane3cd").value = x;
}

function getCharRld() {
    var x = document.getElementById("characters").value;
    document.getElementById("character-rld").value = x;
}

function calculateRld() {

    akagaValue = 0;
    beaconValue = 0;

    var planeCD1 = document.getElementById("plane1cd");
    var planeCD2 = document.getElementById("plane2cd");
    var planeCD3 = document.getElementById("plane3cd");

    var akaga = document.getElementById("akaga");
    var beacon = document.getElementById("beacon");

    total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD3.value) + parseFloat(akagaValue) + parseFloat(beaconValue);

    if (akaga.checked == true) {
        akagaValue = akaga.value;
        total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD3.value) + parseFloat(akagaValue) + parseFloat(beaconValue);
    }

    if (beacon.checked == true) {
        beaconValue = beacon.value;
        total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD3.value) + parseFloat(akagaValue) + parseFloat(beaconValue);
    }

    if (akaga.checked == true && beacon.checked == true) {
        akagaValue = akaga.value;
        beaconValue = beacon.value;
        total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD3.value) + parseFloat(akagaValue) + parseFloat(beaconValue);
    }

    document.getElementById("totalCD").value = total;

    document.getElementById("totalCDCustom").value = total;

}

function reset() {
    document.getElementById("character-rld").value = 0;
    document.getElementById("custom-character-rld").value = 0;
    document.getElementById("plane1cd").value = 0;
    document.getElementById("plane2cd").value = 0;
    document.getElementById("plane3cd").value = 0;

    document.getElementById("totalCD").value = 0;

    document.getElementById("totalCDCustom").value = 0;
}