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
let calendar = document.querySelector("#calendar");
let createNewBtn = document.querySelector("#createCalendar");
let clone = calendar.cloneNode(true);

/*-------Style "completed" and "uncompleted" mark on days----------*/
let days = document.getElementsByClassName("day0");
let daysArray = Array.from(days);

daysArray.forEach(function(current) {
    current.classList.remove("day0");
    current.addEventListener("click", function() {
        if (current.classList.contains("purpleHover")){
            current.classList.remove("purpleHover")
            current.classList.remove("reverseAnimation")
            current.classList.add("correct")
        }
        else{
            current.classList.add("purpleHover")
            current.classList.add("reverseAnimation")
            current.classList.remove("correct")
        }
    });
})


/*-------Create new calendar----------*/


function newId(){ 

    let newNumber = 2;
    clone.id = "calendar" + newNumber;
    newNumber += 1;
    calendar.after(clone);

    let days2 = document.getElementsByClassName("day0");
    let daysArray2 = Array.from(days2);
    createNewBtn.addEventListener("click", newId);
    daysArray2.forEach(function(current) {
        current.classList.remove("day0");
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

}
createNewBtn.addEventListener("click", newId);






