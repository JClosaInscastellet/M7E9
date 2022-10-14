var months = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Nobembre", "Dessembre"];
const monthsMax = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var w = false;
var dates = [];
var words = ["Languages", "Click the button!", "Idiomes", "Clica el boto!"]
var weekdays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenje"];
var weekday = 0;
var unorderedates = [];
var temp = "";

var day = 0;
var month = 0;
var date = new String("");

var showFold = false;

document.getElementById("printdates").innerHTML = words[3];
document.getElementById("languagediv").hidden = true;

function cat() {
    w = false;
    weekdays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenje"];
    document.getElementById("printdates").innerHTML = words[3];
    document.getElementById("fold").innerHTML = words[2];
    months = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Nobembre", "Dessembre"];
    document.getElementById("languagediv").hidden = true;
    var showFold = false;

}
function eng() {
    w = true;
    weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    document.getElementById("printdates").innerHTML = words[1];
    document.getElementById("fold").innerHTML = words[0];
    months = ["January", "February", "March", "April", "May", "June",
        "July", "Agust", "Setember", "October", "Nobember", "December"];
    document.getElementById("languagediv").hidden = true;
    var showFold = false;

}
function language() {
    console.log(showFold);
    if (showFold == false) {
        showFold = true;
        document.getElementById("languagediv").hidden = false;
    } else {
        showFold = false;
        document.getElementById("languagediv").hidden = true;
    }
}

function gendates() {
    dates = [];
    for (var i = 0; i < 5; i++) {
        month = Math.floor(Math.random() * 12);
        day = Math.floor(Math.random() * 31 + 1);
        weekday = Math.floor(Math.random() * 7);

        while (day > monthsMax[month]) {
            day = Math.floor(Math.random() * 31 + 1);
        }
        if (!w) {
            date = weekdays[weekday] + " " + day + " de " + months[month] + " del " + new Date().getFullYear();
        } else {
            date = weekdays[weekday] + " the " + day + "th of " + months[month] + " of " + new Date().getFullYear();

        }
        dates.push(new String(date));


    }

    /** recorre la array */
    let tempMonth = 1;
    let beforeTempMonth = 1;
    for (let j = 0; j < dates.length; j++) {
        for (let i = 1; i < dates.length; i++) {
            // comprovar si l'anterior es mes gran que l'actual, si es mes gran
            // retorna true, sino false
            if(!w){
                
            }else{
                beforeTempMonth = dates[i - 1].split(' ')[4];
                tempMonth = dates[i].split(' ')[4];
            }
            if (months.indexOf(beforeTempMonth) < months.indexOf(tempMonth)) {
                    console.log(false);

                } else {
                    console.log(true);
                    temp = dates[i];
                    dates[i] = dates[i - 1];
                    dates[i - 1] = temp;
                }

        }
    }

    printdates();
}

function printdates() {
    document.getElementById("printdates").innerHTML = "";
    for (let i = 0; i < 5; i++) {
        document.getElementById("printdates").innerHTML += dates[i];
        document.getElementById("printdates").append(document.createElement("br"));
    }
}