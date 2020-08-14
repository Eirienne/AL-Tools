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

    total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD2.value) + parseFloat(akagaValue) + parseFloat(beaconValue);

    if (akaga.checked == true) {
        akagaValue = akaga.value;
        total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD2.value) + parseFloat(akagaValue) + parseFloat(beaconValue);
    }

    if (beacon.checked == true) {
        beaconValue = beacon.value;
        total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD2.value) + parseFloat(akagaValue) + parseFloat(beaconValue);
    }

    if (akaga.checked == true && beacon.checked == true) {
        akagaValue = akaga.value;
        beaconValue = beacon.value;
        total = parseFloat(planeCD1.value) + parseFloat(planeCD2.value) + parseFloat(planeCD2.value) + parseFloat(akagaValue) + parseFloat(beaconValue);
    }

    document.getElementById("totalCD").value = total;

}