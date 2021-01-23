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

let days = document.getElementsByClassName("day");
let daysArray = Array.from(days);

daysArray.forEach(function bro(current) {
    current.addEventListener("click", function() {
        if (current.classList.contains("purpleHover")){
            current.classList.remove("purpleHover")
            current.classList.add("correct")
        }
        else{
            current.classList.add("purpleHover")
            current.classList.remove("correct")
        }
    });
})



