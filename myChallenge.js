/*-------Cookie for marked days----------*/
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


/*-------Style "completed" and "uncompleted" mark on days----------*/
let days = document.getElementsByClassName("day0");
let daysArray = Array.from(days);

daysArray.forEach(function(current) {
    current.classList.remove("day0");
    current.addEventListener("click", function() {
        let x = current.id;
        if (current.classList.contains("purpleHover")){
            current.classList.remove("purpleHover")
            current.classList.remove("reverseAnimation")
            current.classList.add("correct")
            createCookie('day'+x,x,100);
        }
        else{
            current.classList.add("purpleHover")
            current.classList.add("reverseAnimation")
            current.classList.remove("correct")
            eraseCookie('day'+x)
        }
    });
})

/*-------Creates challenge name(h1) cookie----------*/
let challengeName = document.querySelector(".challengeName");
challengeName.addEventListener("input", function(){
    let name = challengeName.textContent;
    createCookie("name",name,100);
})

/*-------Check for cookies when page load----------*/
let numberX = 1;
daysArray.forEach(function(current){
    let name = readCookie("day"+numberX);
    if (name == current.id){
        current.classList.remove("purpleHover")
        current.classList.remove("reverseAnimation")
        current.classList.add("correct")
    };
    numberX += 1;
})
function updateChallengeName(){
    let name = readCookie("name");
    challengeName.textContent = name;
}
updateChallengeName()




/*-------Create new calendar----------*/
let calendar = document.querySelector("#calendar");
let clone = calendar.cloneNode(true);
/*

let createNewBtn = document.querySelector("#createCalendar");

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

*/


