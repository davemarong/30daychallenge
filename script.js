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
/*-------Style "completed" and "uncompleted" mark on days----------*/
let days = document.getElementsByClassName("day");
let daysArray = Array.from(days);

daysArray.forEach(function(current) {
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



/*-------Create new calendar----------*/
let calendar = document.querySelector("#calendar");
let createNewBtn = document.querySelector("#createCalendar");
let clone = calendar.cloneNode(true);

function newId(){ 
    let newNumber = 2;
    clone.id = "calendar" + newNumber;
    newNumber += 1;
    calendar.after(clone);
    
}
createNewBtn.addEventListener("click", newId);






