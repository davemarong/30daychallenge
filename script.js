/*----------------------NAVBAR----------*/
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

/*----------------------MY CHALLENGE----------*/

/*-------Create challenge name----------*/

let btn_noFap = document.querySelector(".btn-noFap");
let btn_yoga = document.querySelector(".btn-yoga");
let btn_noSugar = document.querySelector(".btn-noSugar");
let challengeName = document.querySelector(".challengeName");

btn_noFap.addEventListener("click", function(){
    document.cookie = "ChallengeName=No Fap";
       })








































