months = ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Nobembre","Dessembre"];
const monthsMax = [31,28,31,30,31,30,31,31,30,31,30,31];
var w = false;
var words = ["Languages","Click the button!","Idiomes","Clica el boto!"] 
const dates = [];

var day = 0;
var month = 0;
var date = "";

var showFold = false;

document.getElementById("printdates").innerHTML = words[3];
document.getElementById("languagediv").hidden = true;

function cat(){
    w = false;
    document.getElementById("printdates").innerHTML = words[3];
    document.getElementById("fold").innerHTML = words[2];
    months = ["Gener","Febrer","Març","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Nobembre","Dessembre"];
    document.getElementById("languagediv").hidden = true;
    var showFold = false;

}
function eng(){
    w = true;
    document.getElementById("printdates").innerHTML = words[1];
    document.getElementById("fold").innerHTML = words[0];
    months = ["January","February","March","April","May","June",
    "July","Agust","Setember","October","Nobember","December"];
    document.getElementById("languagediv").hidden = true;
    var showFold = false;

}
function language(){
    console.log(showFold);
    if(showFold == false){
        showFold = true;
        document.getElementById("languagediv").hidden = false;
    }else{
        showFold = false;
        document.getElementById("languagediv").hidden = true;
    }
}

function gendates(){
    for (var i = 0; i < 5; i++) {
        month = Math.floor(Math.random() * 12);
        day = Math.floor(Math.random() * 31 + 1);
        while(day > monthsMax[month]){
            day = Math.floor(Math.random() * 31 + 1);
        }
        if(!w){
        date = day + " de " + months[month] + " del " + new Date().getFullYear();
        }else{
        date = months[month] + " " + day + " of " + new Date().getFullYear();

        }
        dates[i] = date;
        
    }
    printdates();
}

function printdates(){
    document.getElementById("printdates").innerHTML = "";
    for (let i = 0; i < 5; i++) {
        document.getElementById("printdates").innerHTML += dates[i]; 
        document.getElementById("printdates").append(document.createElement("br"));
    }
}