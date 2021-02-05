/*-------Style "completed" and "uncompleted" mark on days----------*/
let days = document.getElementsByClassName("day0");
let daysArray = Array.from(days);

daysArray.forEach(function (current) {
  current.classList.remove("day0");
  current.addEventListener("click", function () {
    let x = current.id;
    if (current.classList.contains("purpleHover")) {
      current.classList.remove("purpleHover");
      current.classList.remove("reverseAnimation");
      current.classList.add("correct");
      createCookie("day" + x, x, 100);
    } else {
      current.classList.add("purpleHover");
      current.classList.add("reverseAnimation");
      current.classList.remove("correct");
      eraseCookie("day" + x);
    }
  });
});

/*-------Creates and edits challenge name(h1) and description cookie----------*/
let challengeName = document.querySelector(".challengeName__h1");
let challengeDescription = document.querySelector(
  ".challengeDescription__textarea"
);
let editBtn = document.querySelector(".editButton");
let saveBtn = document.querySelector(".saveButton");

editBtn.addEventListener("click", function () {
  challengeName.setAttribute("contenteditable", true);
  challengeName.classList.add("editable");
  challengeName.focus();
  challengeDescription.setAttribute("contenteditable", true);
  challengeDescription.classList.add("editable");
  saveBtn.style.visibility = "visible";
});
saveBtn.addEventListener("click", function () {
  let name = challengeName.textContent;
  let description = challengeDescription.textContent;
  createCookie("challengeName", name, 100);
  createCookie("challengeDescription", description, 100);
  challengeName.setAttribute("contenteditable", false);
  challengeDescription.setAttribute("contenteditable", false);
  challengeName.classList.remove("editable");
  challengeDescription.classList.remove("editable");
  saveBtn.style.visibility = "hidden";
});
/*challengeName.addEventListener("input", function(){
    let name = challengeName.textContent;
    createCookie("name",name,100);
})


challengeDescription.addEventListener("input", function(){
    let description = challengeDescription.value;
    createCookie("description",description,100);
})
*/
/*-------Check for cookies when page load----------*/

/*-------Check for cookies when page load----------*/
let numberX = 1;
daysArray.forEach(function (current) {
  let name = readCookie("day" + numberX);
  if (name == current.id) {
    current.classList.remove("purpleHover");
    current.classList.remove("reverseAnimation");
    current.classList.add("correct");
  }
  numberX += 1;
});

function updateChallengeInfo() {
  let name = readCookie("challengeName");
  let description = readCookie("challengeDescription");
  // if (name !== null) {
  if (name !== null) {
    challengeName.textContent = name;
  }
  if (description !== null) {
    challengeDescription.textContent = description;
  }
}
/*function updateChallengeName(){
    let name = readCookie("name");
    challengeName.textContent = name;
}
*/
let calendar = document.querySelector("#calendar");

function removeChallengeTypeClasses() {
  calendar.classList.remove(".calendar-yoga");
  calendar.classList.remove(".calendar-nofap");
  calendar.classList.remove(".calendar-junkfood");
}
function updateChallengeType() {
  removeChallengeTypeClasses();
  let challengeType = readCookie("challengeType");
  calendar.classList.add(challengeType);
}

/*function updateDescription(){
    let description = readCookie("description");
    challengeDescription.value = description;
}
updateDescription()
*/

//updateChallengeName();
updateChallengeType();
updateChallengeInfo();

/*-------Move weekdays up or down----------*/
/*let calendarWeekdays = document.querySelector(".calendar__daysLabel");

function rotateWeekDaysForward(){
    let firstDay = calendarWeekdays.firstElementChild;
    firstDay.remove();
    calendarWeekdays.appendChild(firstDay);
}
function rotateWeekDaysBackwards (){
    let lastDay = calendarWeekdays.lastElementChild;
    let firstDay = calendarWeekdays.firstElementChild;
    lastDay.remove();
    calendarWeekdays.insertBefore(lastDay, firstDay);
}
let rotateForward = document.querySelector(".rotateForward");
let rotateBackward = document.querySelector(".rotateBackward");

rotateForward.addEventListener("click", rotateWeekDaysForward);
rotateBackward.addEventListener("click", rotateWeekDaysBackwards);
*/

/*-------Create new calendar----------*/
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
