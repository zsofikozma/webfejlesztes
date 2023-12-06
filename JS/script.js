document.getElementById("mybutton").addEventListener("click", eredmenyek);
function eredmenyek()
{
document.getElementById("helyes1").style.color = "green";
document.getElementById("helyes2").style.color = "green";
document.getElementById("helyes3").style.color = "green";
document.getElementById("helyes4").style.color = "green";
document.getElementById("helyes5").style.color = "green";
    
let eredmeny = 0;

const valasza1 = document.getElementById("1-1").checked;
const valaszb1 = document.getElementById("1-2").checked;
const valaszc1 = document.getElementById("1-3").checked;

    if (valaszc1==1)
        {eredmeny = eredmeny+1;};

    if (valasza1==1)
        {document.getElementById("rossz1-1").style.color = "red";};

    if (valaszb1==1)
        {document.getElementById("rossz1-2").style.color = "red";};

const valasza2 = document.getElementById("2-1").checked;
const valaszb2 = document.getElementById("2-2").checked;
const valaszc2 = document.getElementById("2-3").checked;

    if (valaszc2==1)
        {eredmeny = eredmeny+1;};

    if (valasza2==1)
        {document.getElementById("rossz2-1").style.color = "red";};

    if (valaszb2==1)
        {document.getElementById("rossz2-2").style.color = "red";};

const valasza3 = document.getElementById("3-1").checked;
const valaszb3 = document.getElementById("3-2").checked;
const valaszc3 = document.getElementById("3-3").checked;

    if (valasza3==1)
        {eredmeny = eredmeny+1;};

    if (valaszc3==1)
        {document.getElementById("rossz3-1").style.color = "red";};

    if (valaszb3==1)
        {document.getElementById("rossz3-2").style.color = "red";};

const valasza4 = document.getElementById("4-1").checked;
const valaszb4 = document.getElementById("4-2").checked;
const valaszc4 = document.getElementById("4-3").checked;

    if (valaszb4==1)
        {eredmeny = eredmeny+1;};

    if (valasza4==1)
        {document.getElementById("rossz4-1").style.color = "red";};

    if (valaszc4==1)
        {document.getElementById("rossz4-2").style.color = "red";};

const valasza5 = document.getElementById("5-1").checked;
const valaszb5 = document.getElementById("5-2").checked;
const valaszc5 = document.getElementById("5-3").checked;

    if (valaszc5==1)
        {eredmeny = eredmeny+1;};

    if (valasza5==1)
        {document.getElementById("rossz5-1").style.color = "red";};

    if (valaszb5==1)
        {document.getElementById("rossz5-2").style.color = "red";};


if (eredmeny < 5) {
    document.getElementById("eredmeny_kiir").innerText = "Az eredményed: " + String(eredmeny) + " :(\nSajnálom, ez most nem jött össze! Majd máskor hátha be tudsz zsebelni egy féláras tanfolyamot!";

} else {
    document.getElementById("eredmeny_kiir").innerText = "Az eredményed: " + String(eredmeny) + " :)\nGratulálok a következő alkalommal részt vehetsz féláron egy képzésünkön! Vedd fel velünk a kapcsolatot és megbeszéljük a részleteket! ;)";
}
}
