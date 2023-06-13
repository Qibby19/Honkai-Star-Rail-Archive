//change to usable value
function int(value) {
    return parseInt(value);
}

//calculate basic attack damage
function basicseele() {
    //get all elements from page to variable
    let atkv = document.getElementById("atk").value
    let spdv = document.getElementById("spd").value
    let critv = document.getElementById("crit").value
    let qdbv = document.getElementById("qdb").value
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

    nocritdmgv = Math.floor(nocritdmgv * ((qdbv / 100) + 1));
    critdmgv = Math.floor(critdmgv * ((qdbv / 100) + 1));

    //put result into the basic atk result
    document.getElementById("nocritbatk").value = nocritdmgv;
    document.getElementById("critbatk").value = critdmgv;

    console.log(atkv + " " + spdv + " " + critv + " " + qdbv + " " + batksv + " " + batkdmgv + " " + nocritdmgv + " " + critdmgv + " ")
}

//calculate skill damage
function skillseele() {
    //get all elements from page to variable
    let atkv = document.getElementById("atk").value
    let spdv = document.getElementById("spd").value
    let critv = document.getElementById("crit").value
    let qdbv = document.getElementById("qdb").value
    let skillsv = document.getElementById("skill").value

    //get damage value from level
    if (skillsv == 1) {
        skilldmgv = 110;
    }
    if (skillsv == 2) {
        skilldmgv = 121;
    }
    if (skillsv == 3) {
        skilldmgv = 132;
    }
    if (skillsv == 4) {
        skilldmgv = 143;
    }
    if (skillsv == 5) {
        skilldmgv = 154;
    }
    if (skillsv == 6) {
        skilldmgv = 165;
    }
    if (skillsv == 7) {
        skilldmgv = 178.75;
    }
    if (skillsv == 8) {
        skilldmgv = 192.5;
    }
    if (skillsv == 9) {
        skilldmgv = 206.25;
    }
    if (skillsv == 10) {
        skilldmgv = 220;
    }

    if (skillsv == 11) {
        skilldmgv = 231;
    }

    if (skillsv == 12) {
        skilldmgv = 242;
    }

    if (skillsv == 13) {
        skilldmgv = 253;
    }

    if (skillsv == 14) {
        skilldmgv = 264;
    }

    if (skillsv == 15) {
        skilldmgv = 275;
    }

    //calculate
    nocritdmgv = Math.floor(((skilldmgv / 100) * atkv));
    critdmgv = Math.floor(((critv / 100) + 1) * nocritdmgv);

    nocritdmgv = Math.floor(nocritdmgv * ((qdbv / 100) + 1));
    critdmgv = Math.floor(critdmgv * ((qdbv / 100) + 1));

    //put result into the skill result
    document.getElementById("nocritskill").value = nocritdmgv;
    document.getElementById("critskill").value = critdmgv;

    console.log(atkv + " " + spdv + " " + critv + " " + qdbv + " " + skillsv + " " + skilldmgv + " " + nocritdmgv + " " + critdmgv + " ")
}

//calculate ultimate damage
function ultseele() {
    //get all elements from page to variable
    let atkv = document.getElementById("atk").value
    let spdv = document.getElementById("spd").value
    let critv = document.getElementById("crit").value
    let qdbv = document.getElementById("qdb").value
    let ultsv = document.getElementById("ult").value

    //get damage value from level
    if (ultsv == 1) {
        ultdmgv = 225;
    }
    if (ultsv == 2) {
        ultdmgv = 272;
    }
    if (ultsv == 3) {
        ultdmgv = 289;
    }
    if (ultsv == 4) {
        ultdmgv = 306;
    }
    if (ultsv == 5) {
        ultdmgv = 323;
    }
    if (ultsv == 6) {
        ultdmgv = 340;
    }
    if (ultsv == 7) {
        ultdmgv = 361.25;
    }
    if (ultsv == 8) {
        ultdmgv = 382.5;
    }
    if (ultsv == 9) {
        ultdmgv = 403.75;
    }
    if (ultsv == 10) {
        ultdmgv = 425;
    }

    if (ultsv == 11) {
        ultdmgv = 442;
    }

    if (ultsv == 12) {
        ultdmgv = 459;
    }

    if (ultsv == 13) {
        ultdmgv = 476;
    }

    if (ultsv == 14) {
        ultdmgv = 493;
    }

    if (ultsv == 15) {
        ultdmgv = 510;
    }

    //calculate
    nocritdmgv = Math.floor(((ultdmgv / 100) * atkv));
    critdmgv = Math.floor(((critv / 100) + 1) * nocritdmgv);

    nocritdmgv = Math.floor(nocritdmgv * ((qdbv / 100) + 1));
    critdmgv = Math.floor(critdmgv * ((qdbv / 100) + 1));

    //put result into the ultimate result
    document.getElementById("nocritult").value = nocritdmgv;
    document.getElementById("critult").value = critdmgv;

    console.log(atkv + " " + spdv + " " + critv + " " + qdbv + " " + ultsv + " " + ultdmgv + " " + nocritdmgv + " " + critdmgv + " ")
}