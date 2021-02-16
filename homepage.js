let btn_noFap = document.querySelector(".btn-noFap");
let btn_yoga = document.querySelector(".btn-yoga");
let btn_noSugar = document.querySelector(".btn-noSugar");

btn_noFap.addEventListener("click", function () {
  createCookie("challengeType", "calendar-nofap", 100);
});
btn_yoga.addEventListener("click", function () {
  createCookie("challengeType", "calendar-yoga", 100);
});
btn_noSugar.addEventListener("click", function () {
  createCookie("challengeType", "calendar-junkfood", 100);
});
let accordion__item = document.getElementsByClassName("accordion__item");
for (let i = 0; i < accordion__item.length; i++) {
  accordion__item[i].addEventListener("click", function () {
    this.classList.toggle("accordion-active");
    let accordion__item__dropdown = this.nextElementSibling;
    if (accordion__item__dropdown.style.maxHeight) {
      accordion__item__dropdown.style.maxHeight = null;
    } else {
      accordion__item__dropdown.style.maxHeight =
        accordion__item__dropdown.scrollHeight + "px";
    }
  });
}
function toggleNavbar() {
  var x = document.querySelector(".nav-mobile-ul");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
