//get data from database and put into the page
function loaddata(atklv, spdlv, critlv, fdblv, batklv, skilllv, ultlv) {
    console.log(atklv + " " + spdlv + " " + critlv + " " + fdblv + " " + batklv + " " + skilllv + " " + ultlv);

    //put value intoo page
    document.getElementById("atk").value = atklv
    document.getElementById("spd").value = spdlv
    document.getElementById("crit").value = critlv
    document.getElementById("fdb").value = fdblv
    document.getElementById("batk").value = batklv
    document.getElementById("skill").value = skilllv
    document.getElementById("ult").value = ultlv

    //initiate function to calculate
    basichimeko();
    skillhimeko();
    ulthimeko();

    //close load window
    loadmodal.style.display = "none";
}