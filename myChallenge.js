/*-------Style "completed" and "uncompleted" mark on days----------*/
let days = document.getElementsByClassName("day0");
let daysArray = Array.from(days);

let dayDate = document.getElementsByClassName("dayDate");
let dayDateArray = Array.from(dayDate);

daysArray.forEach(function (current) {
  current.classList.remove("day0");
  current.addEventListener("click", function () {
    let x = current.id;
    let currentDate = x + "X";
    let date = document.getElementById(currentDate);
    if (current.classList.contains("purpleHover")) {
      current.classList.remove("purpleHover");
      current.classList.remove("reverseAnimation");
      current.classList.add("correct");
      createCookie("day" + x, x, 100);
      let dateValue = (date.textContent = new Date(Date.now())
        .toLocaleString()
        .split(",")[0]);
      date.style.visibility = "visible";
      createCookie("dayDate" + x, dateValue, 100);
    } else {
      if (
        confirm(
          "If you continue, the date for this particular day will be deleted and can not be reversed."
        )
      ) {
        current.classList.add("purpleHover");
        current.classList.add("reverseAnimation");
        current.classList.remove("correct");
        eraseCookie("day" + x);
        eraseCookie("dayDate" + x);
        date.textContent = "";
        date.style.visibility = "hidden";
      }
    }
  });
});

/*-------Hide and show dayDate----------*/
let datesBtn = document.querySelector(".datesButton");
let hidden;
function showOrHideDates() {
  if (hidden == true) {
    dayDateArray.forEach(function (current) {
      if (current.textContent !== "") {
        current.style.visibility = "visible";
        current.style.opacity = "1";
        hidden = false;
      }
    });
  } else {
    dayDateArray.forEach(function (current) {
      current.style.visibility = "hidden";
      current.style.opacity = "0";
      hidden = true;
    });
  }
}

/*-------Detailed information feature----------*/
let detailsBtn = document.querySelector(".detailsButton");

let calendar_details = document.getElementsByClassName("calendar__details");
let calendar_details_array = Array.from(calendar_details);

let height = 200;
function changeDetails() {
  showOrHideDates();
  if (height == 0) {
    calendar_details_array.forEach(function (current) {
      current.style.visibility = "visible";
      current.style.opacity = "1";
      current.style.height = "200px";
      height = 200;
    });
  } else {
    calendar_details_array.forEach(function (current) {
      current.style.visibility = "hidden";
      current.style.opacity = "0";
      current.style.height = "0px";
      height = 0;
    });
  }
}
detailsBtn.addEventListener("click", changeDetails);

/*-------Creates and edits challenge name(h1), description and details cookie----------*/
let challengeName = document.querySelector(".challengeName__h1");
let challengeDescription = document.querySelector(
  ".challengeDescription__textarea"
);
let editBtn = document.querySelector(".editButton");
let saveBtn = document.querySelector(".saveButton");

function editInfo() {
  challengeName.setAttribute("contenteditable", true);
  challengeName.classList.add("editable");
  challengeName.focus();
  challengeDescription.setAttribute("contenteditable", true);
  challengeDescription.classList.add("editable");
  calendar_details_array.forEach(function (current) {
    current.setAttribute("contenteditable", true);
    current.classList.add("editable");
  });
  saveBtn.style.visibility = "visible";
}

function saveInfo() {
  let x = 1;
  let name = challengeName.textContent;
  let description = challengeDescription.textContent;
  createCookie("challengeName", name, 100);
  createCookie("challengeDescription", description, 100);
  challengeName.setAttribute("contenteditable", false);
  challengeDescription.setAttribute("contenteditable", false);
  challengeName.classList.remove("editable");
  challengeDescription.classList.remove("editable");
  calendar_details_array.forEach(function (current) {
    current.setAttribute("contenteditable", false);
    current.classList.remove("editable");
    let detailInfo = current.textContent;
    if (detailInfo !== "") {
      createCookie("details" + x, detailInfo, 100);
    }
    x++;
  });
  saveBtn.style.visibility = "hidden";
}

editBtn.addEventListener("click", editInfo);
saveBtn.addEventListener("click", saveInfo);

/*-------Feature buttons transition----------*/
let settingsBtn = document.querySelector(".settingsButton");
let feature_list = document.querySelector(".feature__buttons");
let translate = 0;

function featureTransition() {
  if (translate == 0) {
    feature_list.style.visibility = "visible";
    feature_list.style.transform = "translate(-0%)";
    translate = -100;
  } else {
    feature_list.style.transform = "translate(-130%)";
    translate = 0;
  }
}

settingsBtn.addEventListener("click", featureTransition);

/*-------Change view----------*/
let viewBtn = document.querySelector(".viewButton");
let calendar__container = document.querySelector(".calendar__30days");

let view;
function changeView() {
  if (view == "") {
    calendar__container.classList.remove("grid");
    calendar__container.classList.add("flex");
    daysArray.forEach(function (current) {
      current.classList.add("day-flex");
    });
    calendar_details_array.forEach(function (current) {
      current.style.visibility = "visible";
      current.style.position = "relative";
    });
    view = "overview";
  } else {
    calendar__container.classList.remove("flex");
    calendar__container.classList.add("grid");
    daysArray.forEach(function (current) {
      current.classList.remove("day-flex");
    });
    calendar_details_array.forEach(function (current) {
      current.style.visibility = "hidden";
      current.style.position = "absolute";
    });

    view = "";
  }
}

viewBtn.addEventListener("click", changeView);

/*-------InActive buttons----------*/
function inActive() {}

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
function updateDayDate() {
  for (let i = 1; i < 31; i++) {
    let cookie = readCookie("dayDate" + i);
    if (cookie !== null) {
      let date = document.getElementById(i + "X");
      date.textContent = cookie;
      date.style.visibility = "visible";
    }
  }
}

function updateDetailInfo() {
  let x = 1;
  calendar_details_array.forEach(function (current) {
    let cookie = readCookie("details" + x);
    if (typeof cookie == "string") {
      current.textContent = cookie;
    }
    x++;
  });
}

function updateChallengeInfo() {
  let name = readCookie("challengeName");
  let description = readCookie("challengeDescription");
  if (name !== null) {
    challengeName.textContent = name;
  }
  if (description !== null) {
    challengeDescription.textContent = description;
  }
}

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

updateChallengeType();
updateChallengeInfo();
updateDayDate();
updateDetailInfo();
