//change to usable value
function int(value) {
    return parseInt(value);
}

//calculate basic attack damage
function basichimeko() {
    //get all elements from page to variable
    let atkv = document.getElementById("atk").value
    let spdv = document.getElementById("spd").value
    let critv = document.getElementById("crit").value
    let fdbv = document.getElementById("fdb").value
    let batksv = document.getElementById("batk").value

    //get damage value from level
    if (batksv == 1) {
        batkdmgv = 50;
    }
    if (batksv == 2) {
        batkdmgv = 60;
    }
    if (batksv == 3) {
        batkdmgv = 70;
    }
    if (batksv == 4) {
        batkdmgv = 80;
    }
    if (batksv == 5) {
        batkdmgv = 90;
    }
    if (batksv == 6) {
        batkdmgv = 100;
    }
    if (batksv == 7) {
        batkdmgv = 110;
    }
    if (batksv == 8) {
        batkdmgv = 120;
    }
    if (batksv == 9) {
        batkdmgv = 130;
    }

    //calculate
    nocritdmgv = Math.floor(((batkdmgv / 100) * atkv));
    critdmgv = Math.floor(((critv / 100) + 1) * nocritdmgv);

    nocritdmgv = Math.floor(nocritdmgv * ((fdbv / 100) + 1));
    critdmgv = Math.floor(critdmgv * ((fdbv / 100) + 1));

    //put result into the basic atk result
    document.getElementById("nocritbatk").value = nocritdmgv;
    document.getElementById("critbatk").value = critdmgv;

    console.log(atkv + " " + spdv + " " + critv + " " + fdbv + " " + batksv + " " + batkdmgv + " " + nocritdmgv + " " + critdmgv + " ")
}

//calculate skill damage
function skillhimeko() {
    //get all elements and put into variable
    let atkv = document.getElementById("atk").value
    let spdv = document.getElementById("spd").value
    let critv = document.getElementById("crit").value
    let fdbv = document.getElementById("fdb").value
    let skillsv = document.getElementById("skill").value

    //get damage value from level
    if (skillsv == 1) {
        skilldmgv = 100;
        skilldmgv2 = 40;
    }
    if (skillsv == 2) {
        skilldmgv = 110;
        skilldmgv2 = 44;
    }
    if (skillsv == 3) {
        skilldmgv = 120;
        skilldmgv2 = 48;
    }
    if (skillsv == 4) {
        skilldmgv = 130;
        skilldmgv2 = 52;
    }
    if (skillsv == 5) {
        skilldmgv = 140;
        skilldmgv2 = 56;
    }
    if (skillsv == 6) {
        skilldmgv = 150;
        skilldmgv2 = 60;
    }
    if (skillsv == 7) {
        skilldmgv = 162.5;
        skilldmgv2 = 65;
    }
    if (skillsv == 8) {
        skilldmgv = 175;
        skilldmgv2 = 70;
    }
    if (skillsv == 9) {
        skilldmgv = 187.5;
        skilldmgv2 = 75;
    }
    if (skillsv == 10) {
        skilldmgv = 200;
        skilldmgv2 = 80;
    }

    if (skillsv == 11) {
        skilldmgv = 210;
        skilldmgv2 = 84;
    }

    if (skillsv == 12) {
        skilldmgv = 220;
        skilldmgv2 = 88;
    }

    if (skillsv == 13) {
        skilldmgv = 230;
        skilldmgv2 = 92;
    }

    if (skillsv == 14) {
        skilldmgv = 240;
        skilldmgv2 = 96;
    }

    if (skillsv == 15) {
        skilldmgv = 250;
        skilldmgv2 = 100;
    }

    //calculate
    nocritdmgv = Math.floor(((skilldmgv / 100) * atkv));
    critdmgv = Math.floor(((critv / 100) + 1) * nocritdmgv);

    nocritdmgv = Math.floor(nocritdmgv * ((fdbv / 100) + 1));
    critdmgv = Math.floor(critdmgv * ((fdbv / 100) + 1));

    nocritdmgv2 = Math.floor(((skilldmgv2 / 100) * atkv));
    critdmgv2 = Math.floor(((critv / 100) + 1) * nocritdmgv2);

    nocritdmgv2 = Math.floor(nocritdmgv2 * ((fdbv / 100) + 1));
    critdmgv2 = Math.floor(critdmgv2 * ((fdbv / 100) + 1));

    //put result into skill result
    document.getElementById("nocritskill").value = nocritdmgv;
    document.getElementById("critskill").value = critdmgv;
    document.getElementById("nocritskill2").value = nocritdmgv2;
    document.getElementById("critskill2").value = critdmgv2;

    console.log(atkv + " " + spdv + " " + critv + " " + fdbv + " " + skillsv + " " + skilldmgv + " " + nocritdmgv + " " + critdmgv + " " + nocritdmgv2 + " " + critdmgv2 + " ")
}

//calculate ultimate damage
function ulthimeko() {
    //get all elements and put into variable
    let atkv = document.getElementById("atk").value
    let spdv = document.getElementById("spd").value
    let critv = document.getElementById("crit").value
    let fdbv = document.getElementById("fdb").value
    let ultsv = document.getElementById("ult").value

    //get damage value from level
    if (ultsv == 1) {
        ultdmgv = 138;
    }
    if (ultsv == 2) {
        ultdmgv = 147.2;
    }
    if (ultsv == 3) {
        ultdmgv = 156.4;
    }
    if (ultsv == 4) {
        ultdmgv = 165.6;
    }
    if (ultsv == 5) {
        ultdmgv = 174.8;
    }
    if (ultsv == 6) {
        ultdmgv = 184;
    }
    if (ultsv == 7) {
        ultdmgv = 195.5;
    }
    if (ultsv == 8) {
        ultdmgv = 207;
    }
    if (ultsv == 9) {
        ultdmgv = 218.5;
    }
    if (ultsv == 10) {
        ultdmgv = 230;
    }

    if (ultsv == 11) {
        ultdmgv = 239.2;
    }

    if (ultsv == 12) {
        ultdmgv = 248.4;
    }

    if (ultsv == 13) {
        ultdmgv = 257.6;
    }

    if (ultsv == 14) {
        ultdmgv = 266.8;
    }

    if (ultsv == 15) {
        ultdmgv = 276;
    }

    //calculate
    nocritdmgv = Math.floor(((ultdmgv / 100) * atkv));
    critdmgv = Math.floor(((critv / 100) + 1) * nocritdmgv);

    nocritdmgv = Math.floor(nocritdmgv * ((fdbv / 100) + 1));
    critdmgv = Math.floor(critdmgv * ((fdbv / 100) + 1));

    //put result into ultimate result
    document.getElementById("nocritult").value = nocritdmgv;
    document.getElementById("critult").value = critdmgv;

    console.log(atkv + " " + spdv + " " + critv + " " + fdbv + " " + ultsv + " " + ultdmgv + " " + nocritdmgv + " " + critdmgv + " ")
}