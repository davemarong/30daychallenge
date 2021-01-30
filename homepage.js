
let btn_noFap = document.querySelector(".btn-noFap");
let btn_yoga = document.querySelector(".btn-yoga");
let btn_noSugar = document.querySelector(".btn-noSugar");

btn_noFap.addEventListener("click", function(){
    createCookie('challengeType','calendar-nofap',100);
})
btn_yoga.addEventListener("click", function(){
    createCookie('challengeType','calendar-yoga',100);
})
btn_noSugar.addEventListener("click", function(){
    createCookie('challengeType','calendar-junkfood',100);
})

