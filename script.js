function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
let days = document.getElementsByClassName("day");
let daysArray = Array.from(days);

daysArray.forEach(function(current) {
    current.addEventListener("click", function() {
        if (current.classList.contains("purpleHover")){
            current.classList.remove("purpleHover")
            current.classList.add("correct")
            current.addEventListener("click",)
        }
        else{
            current.classList.remove("purpleHover")
            current.classList.add("correct")
        }
    });
})
