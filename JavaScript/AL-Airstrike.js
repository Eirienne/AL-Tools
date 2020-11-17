function updateLog() {
    var x = document.getElementById("content");
    
    x.innerHTML = 
    "<center>" 
    + "<h1>Update Log</h1>"
    + "<br>"
    + "<li>2020-10-01 | Update Shinano</li>"
    + "<br>"
    + "<br>"
    + "</center>"
    + "<center>"
    + "<a href="
    + "AL-Airstrike.html"
    + ">Return</a>"
    + "</center>"
    ;
}

function returnToCalc() {
    window.history.back();
}

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
    var legend1 = 2.2;
    var legend2 = 0.1;

    var planeCD1 = document.getElementById("plane1cd").value;
    var planeCD2 = document.getElementById("plane2cd").value;
    var planeCD3 = document.getElementById("plane3cd").value;

    var plane1Number = document.getElementById("plane1number").value;
    var plane2Number = document.getElementById("plane2number").value;
    var plane3Number = document.getElementById("plane3number").value;

    var akaga = document.getElementById("akaga");
    var beacon = document.getElementById("beacon");

    var skillBonus = document.getElementById("skill-bonus").value/100;
    var reload = document.getElementById("character-rld").value;
    var customReload = document.getElementById("custom-character-rld").value;

    totalCDxPlane = (parseFloat(parseFloat(planeCD1)*plane1Number) + parseFloat(parseFloat(planeCD2)*plane2Number) + parseFloat(parseFloat(planeCD3)*plane3Number))
    var totalPlane = parseFloat(plane1Number) + parseFloat(plane2Number) + parseFloat(plane3Number);

    var root = Math.sqrt(200/(100+parseFloat(reload)*(1+parseFloat(skillBonus))));
    var customRoot = Math.sqrt(200/(100+parseFloat(customReload)*(1+parseFloat(skillBonus))));

    // var test = ((planeCD1*plane1Number)+(planeCD2*plane2Number)+(planeCD3*plane3Number));

    var total = (((totalCDxPlane/totalPlane)*legend1)*root)+legend2;
    var totalCustom = (((totalCDxPlane/totalPlane)*legend1)*customRoot)+legend2;

    if (akaga.checked == true) {
        akagaValue = akaga.value;
        total = total * akagaValue;
    }

    if (beacon.checked == true) {
        beaconValue = beacon.value;
        total = total - (total * beaconValue);
    }

    if (akaga.checked == true && beacon.checked == true) {
        akagaValue = akaga.value;
        beaconValue = beacon.value;
        temp = total - (total * akagaValue)
        total = total - (total * beaconValue);
    }

    document.getElementById("totalCD").innerText = (total);

    document.getElementById("totalCDCustom").innerText = totalCustom;

}

function reset() {
    document.getElementById("character-rld").value = 0;
    document.getElementById("custom-character-rld").value = 0;
    document.getElementById("plane1cd").value = 0;
    document.getElementById("plane2cd").value = 0;
    document.getElementById("plane3cd").value = 0;

    document.getElementById("totalCD").innerText = 0;

    document.getElementById("totalCDCustom").innerText = 0;
}