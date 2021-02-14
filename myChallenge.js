/*-------Style "completed" and "uncompleted" mark on days----------*/
// let days = document.getElementsByClassName("day0");
// let daysArray = Array.from(days);

/*-------Hide and show dayDate----------*/
let hidden;
function showOrHideDates() {
  let dayDate = document.getElementsByClassName("dayDate");
  let dayDateArray = Array.from(dayDate);
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

function showOrHideDetails() {
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
detailsBtn.addEventListener("click", function () {
  if (view == "zoomedIn") {
    showOrHideDetails();
    showOrHideDates();
  }
});

/*-------Creates and edits challenge name(h1), description and details cookie----------*/
let challengeName = document.querySelector(".challengeName__h1");
let challengeDescription = document.querySelector(
  ".challengeDescription__textarea"
);
let editBtn = document.querySelector(".editButton");
let saveBtn = document.querySelector(".saveButton");
let cancelBtn = document.querySelector(".cancelButton");

function editInfo() {
  if (view == "zoomedIn") {
    height = 0;
    hidden = true;
    showOrHideDetails();
    showOrHideDates();
    challengeName.setAttribute("contenteditable", true);
    challengeName.classList.add("editable");
    challengeName.classList.add("border-animation");
    challengeDescription.setAttribute("contenteditable", true);
    challengeDescription.classList.add("border-animation");
    challengeDescription.classList.add("editable");
    calendar_details_array.forEach(function (current) {
      current.setAttribute("contenteditable", true);
      current.classList.add("editable");
      current.classList.add("border-animation");
    });
    saveBtn.style.visibility = "visible";
    cancelBtn.style.visibility = "visible";
    feature_list.style.opacity = 0.2;
  }
}

function saveInfo() {
  let x = 1;
  let name = challengeName.innerText;
  let description = challengeDescription.innerText;
  createCookie("challengeName", name, 100);
  createCookie("challengeDescription", description, 100);
  challengeName.setAttribute("contenteditable", false);
  challengeDescription.setAttribute("contenteditable", false);
  challengeName.classList.remove("editable");
  challengeName.classList.remove("border-animation");
  challengeDescription.classList.remove("editable");
  challengeDescription.classList.remove("border-animation");
  calendar_details_array.forEach(function (current) {
    current.setAttribute("contenteditable", false);
    current.classList.remove("editable");
    current.classList.remove("border-animation");
    let detailInfo = current.innerText;
    // if (detailInfo !== "") {
    createCookie("details" + x, detailInfo, 100);
    // }
    x++;
  });
  saveBtn.style.visibility = "hidden";
  cancelBtn.style.visibility = "hidden";
  feature_list.style.opacity = 1;
}
function cancelEditMode() {
  challengeName.setAttribute("contenteditable", false);
  challengeDescription.setAttribute("contenteditable", false);
  challengeName.classList.remove("editable");
  challengeDescription.classList.remove("editable");
  calendar_details_array.forEach(function (current) {
    current.setAttribute("contenteditable", false);
    current.classList.remove("editable");
    current.classList.remove("border-animation");
  });
  saveBtn.style.visibility = "hidden";
  cancelBtn.style.visibility = "hidden";
  feature_list.style.opacity = 1;
  updateChallengeInfo();
  updateDetailInfo();
}

/*-------Style "completed" and "uncompleted" mark on days----------*/
function checkOrUncheckDays() {
  let days = document.getElementsByClassName("day0");
  let daysArray = Array.from(days);
  // console.log(days);
  // console.log(daysArray);
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
        if (view == "zoomedIn") {
          // editInfo();
          height = 0;
          hidden = true;
          showOrHideDetails();
          showOrHideDates();
          let currentDay = document.querySelector(".details" + x);
          currentDay.setAttribute("contenteditable", true);
          currentDay.classList.add("editable");
          currentDay.classList.add("border-animation");
          saveBtn.style.visibility = "visible";
          cancelBtn.style.visibility = "visible";
          feature_list.style.opacity = 0.2;
          setTimeout(function () {
            currentDay.focus();
          }, 500);

          // challengeName.classList.remove("editable");
          // challengeDescription.classList.remove("editable");
        }
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
}
/*-------Feature buttons transition----------*/
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

// settingsBtn.addEventListener("click", featureTransition);

/*-------Change view----------*/
let viewBtn = document.querySelector(".viewButton");
let calendar__container = document.querySelector(".calendar__30days");

let view = "zoomedIn";
function changeView() {
  let days = document.getElementsByClassName("day");
  let daysArray = Array.from(days);
  console.log(days);
  console.log(daysArray);
  if (view == "zoomedOut") {
    calendar__container.classList.remove("grid");
    calendar__container.classList.add("flex");
    daysArray.forEach(function (current) {
      current.classList.add("day-flex");
    });
    calendar_details_array.forEach(function (current) {
      current.style.visibility = "visible";
      current.style.position = "relative";
    });
    detailsBtn.classList.remove("inActive");
    editBtn.classList.remove("inActive");
    view = "zoomedIn";
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
    height = 200;
    hidden = false;
    showOrHideDetails();
    showOrHideDates();
    detailsBtn.classList.add("inActive");
    editBtn.classList.add("inActive");
    view = "zoomedOut";
  }
}

viewBtn.addEventListener("click", changeView);

/*-------Delete Days and Details----------*/
function deleteAllDaysAndDetails() {
  let challengeName = document.querySelector(".challengeName__h1");
  let challengeDescription = document.querySelector(
    ".challengeDescription__textarea"
  );
  challengeName.textContent = "";
  challengeDescription.textContent = "";
  for (let x = 1; x < 31; x++) {
    let dayCircle = document.querySelector(".day" + x);
    let dayStamp = document.querySelector(".day" + x + " > span");
    dayCircle.classList.remove("correct");
    dayCircle.classList.add("purpleHover");
    eraseCookie("day" + x, x, 100);
    dayStamp.textContent = "";
    let dayDescription = document.querySelector(".details" + x);
    dayDescription.textContent = "";
    createCookie("dayDate" + x, "", 100);
  }
  saveInfo();
}
/*-------Instruction steps 1-5 ----------*/
let day1 = document.querySelector(".day1");
let details1 = document.querySelector(".details1");
let startBtn = document.querySelector(".startButton");
let feature = document.querySelector(".feature");

function step0() {
  let instruction__step0 = document.querySelector(".instructions__step0");
  instruction__step0.style.display = "flex";
  instruction__step0.classList.add("border-animation");
  instruction__step0.classList.add("flex");
  startBtn.classList.add("button-animation");
  startBtn.addEventListener("click", function removeStep0() {
    instruction__step0.style.display = "none";
    startBtn.removeEventListener("click", removeStep0);
    step1();
  });
}
function step1() {
  let instruction__step1 = document.querySelector(".instructions__step1");
  instruction__step1.style.display = "block";
  editBtn.classList.add("button-animation");
  // feature.style.position = "relative";
  editBtn.addEventListener("click", function removeStep1() {
    editBtn.classList.remove("button-animation");
    instruction__step1.style.display = "none";
    editBtn.removeEventListener("click", removeStep1);
    step2();
  });
}
function step2() {
  let instruction__step2 = document.querySelector(".instructions__step2");
  instruction__step2.style.display = "block";
  challengeName.classList.add("border-animation");
  challengeDescription.classList.add("border-animation");
  saveBtn.classList.add("button-animation");
  // feature_list.classList.add("displayNone");
  saveBtn.addEventListener("click", function removeStep2() {
    instruction__step2.style.display = "none";
    challengeName.classList.remove("border-animation");
    challengeDescription.classList.remove("border-animation");
    saveBtn.classList.remove("button-animation");
    saveBtn.removeEventListener("click", removeStep2);
    // let challengeNameCookie = challengeName.textContent;
    // let challengeDescriptionCookie = challengeDescription.textContent;
    // createCookie("challengeName", challengeNameCookie, 100);
    // createCookie("challengeDescription", challengeDescriptionCookie, 100);
    step3();
  });
}

function step3() {
  let instruction__step3 = document.querySelector(".instructions__step3");
  instruction__step3.style.display = "block";
  day1.classList.add("circle-animation");
  day1.classList.add("purpleHover");
  day1.classList.remove("correct");
  // feature_list.classList.remove("displayNone");
  day1.addEventListener("click", function removeStep3() {
    instruction__step3.style.display = "none";
    day1.classList.remove("circle-animation");
    day1.removeEventListener("click", removeStep3);
    step4();
  });
}

function step4() {
  let instruction__step4 = document.querySelector(".instructions__step4");
  instruction__step4.style.display = "block";
  details1.classList.add("border-animation");
  saveBtn.classList.add("button-animation");
  saveBtn.addEventListener("click", function removeStep4() {
    instruction__step4.style.display = "none";
    details1.classList.remove("border-animation");
    saveBtn.classList.remove("button-animation");
    saveBtn.removeEventListener("click", removeStep4);
    step5();
  });
}

function step5() {
  let instruction__step5 = document.querySelector(".instructions__step5");
  instruction__step5.style.display = "block";
  detailsBtn.classList.add("button-animation");
  detailsBtn.addEventListener("click", function removeStep5() {
    detailsBtn.classList.remove("button-animation");
    viewBtn.classList.add("button-animation");
    detailsBtn.removeEventListener("click", removeStep5);
    viewBtn.addEventListener("click", function removeStep5b() {
      viewBtn.classList.remove("button-animation");
      instruction__step5.style.display = "none";
      viewBtn.removeEventListener("click", removeStep5b);
      createCookie("introductionSteps", "completed", 300);
    });
  });
}

/*-------Check for cookies when page load----------*/
function updateCheckedDays() {
  let days = document.getElementsByClassName("day");
  let daysArray = Array.from(days);
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
}
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
function isIntroductionsStepsCompleted() {
  let cookie = readCookie("introductionSteps");
  if (cookie !== "completed") {
    step0();
  }
}
checkOrUncheckDays();
isIntroductionsStepsCompleted();
updateCheckedDays();
updateChallengeInfo();
updateDayDate();
updateDetailInfo();

editBtn.addEventListener("click", editInfo);
saveBtn.addEventListener("click", saveInfo);
cancelBtn.addEventListener("click", cancelEditMode);
