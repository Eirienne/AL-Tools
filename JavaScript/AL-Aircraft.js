// List CV/CVL Characters and their CD stats
$(document).ready(function () {

    var list1 = document.getElementById("characters");
    var $select = $("#characters");

    $.getJSON("JSON/AL-Char.json", function(data){

        var char = data;

        $.each(char, function () {
            // console.log(this.name);
            // console.log(this.reload);

            $select.append('<option value=' + this.reload + '>' + this.name + '</option>');
        });

    }).fail(function(){
        console.log("An error has occurred.");
    });
    list1.options[0] = new Option('--Select--', '0');
    list1.options[0].disabled = true;
    // list1.options[1] = new Option('Akagi', '131');
    // list1.options[2] = new Option('Akagi (Muse)', '131');
    // list1.options[3] = new Option('Akagi-chan', '124');
    // list1.options[4] = new Option('Anniversary Kizuna AI', '120');
    // list1.options[5] = new Option('Ark Royal', '117');
    // list1.options[6] = new Option('Bataan', '199');
    // list1.options[7] = new Option('Béarn', '110');
    // list1.options[8] = new Option('Bogue', '179');
    // list1.options[9] = new Option('Bogue (Retrofit)', '184');
    // list1.options[10] = new Option('Bunker Hill', '131');
    // list1.options[11] = new Option('Casablanca', '193');
    // list1.options[12] = new Option('Centaur', '160');
    // list1.options[13] = new Option('Chaser', '185');
    // list1.options[14] = new Option('Chitose', '185');
    // list1.options[15] = new Option('Chiyoda', '179');
    // list1.options[16] = new Option('Eagle', '112');
    // list1.options[17] = new Option('Enterprise', '132');
    // list1.options[18] = new Option('Essex', '131');
    // list1.options[19] = new Option('Formidable', '117');
    // list1.options[20] = new Option('Fumiruiru', '95');
    // list1.options[21] = new Option('Glorious', '109');
    // list1.options[23] = new Option('Graf Zeppelin', '115');
    // list1.options[24] = new Option('Green Heart', '115');
    // list1.options[25] = new Option('Hermes', '173');
    // list1.options[26] = new Option('Hermes (Retrofit)', '193');
    // list1.options[27] = new Option('Hiryuu', '121');
    // list1.options[28] = new Option('Hiryuu (Retrofit)', '141');
    // list1.options[29] = new Option('Hiyou', '157');
    // list1.options[30] = new Option('Hornet', '121');
    // list1.options[31] = new Option('Houshou', '176');
    // list1.options[32] = new Option('Illustrious', '117');
    // list1.options[33] = new Option('Independence', '182');
    // list1.options[34] = new Option('Intrepid', '131');
    // list1.options[35] = new Option('Junyou', '157');
    // list1.options[36] = new Option('Kaga', '131');
    // list1.options[37] = new Option('Langley', '123');
    // list1.options[38] = new Option('Langley (Retrofit)', '128');
    // list1.options[39] = new Option('Lexington', '110');
    // list1.options[40] = new Option('Little Illustrious', '110');
    // list1.options[41] = new Option('Long Island', '182');
    // list1.options[42] = new Option('Long Island (Retrofit)', '187');
    // list1.options[43] = new Option('Murasaki Shion', '174');
    // list1.options[44] = new Option('Ookami Mio', '117');
    // list1.options[45] = new Option('Perseus', '168');
    // list1.options[46] = new Option('Ranger', '131');
    // list1.options[47] = new Option('Ranger (Retrofit)', '136');
    // list1.options[48] = new Option('Ryuuhou', '189');
    // list1.options[49] = new Option('Ryuujou', '179');
    // list1.options[50] = new Option('Saraana', '156');
    // list1.options[51] = new Option('Saratoga', '110');
    // list1.options[52] = new Option('Saratoga (Retrofit)', '130');
    // list1.options[53] = new Option('Shangri-La', '131');
    // list1.options[54] = new Option('Shinano', '126');
    // list1.options[55] = new Option('Shouhou', '178');
    // list1.options[56] = new Option('Shouhou (Retrofit)', '183');
    // list1.options[57] = new Option('Shoukaku', '120');
    // list1.options[58] = new Option('Souryuu', '121');
    // list1.options[59] = new Option('Souryuu (Retrofit)', '141');
    // list1.options[60] = new Option('Taihou', '120');
    // list1.options[61] = new Option('Tokino Sora', '123');
    // list1.options[62] = new Option('Unicorn', '181');
    // list1.options[63] = new Option('Uruuru', '156');
    // list1.options[64] = new Option('Vert', '112');
    // list1.options[65] = new Option('Victorious', '104');
    // list1.options[66] = new Option('Wasp', '117');
    // list1.options[67] = new Option('Yorktown', '121');
    // list1.options[68] = new Option('Zeppy', '110');
    // list1.options[69] = new Option('Zuikaku', '120');
});