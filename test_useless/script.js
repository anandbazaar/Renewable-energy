document.querySelector(".button1").addEventListener("click", Morning);
document.querySelector(".button2").addEventListener("click", Afternoon);
document.querySelector(".button3").addEventListener("click", Evening);
document.querySelector(".button4").addEventListener("click", Night);

function Morning() {
  document.querySelector(".blade").style.animation =
    "rotate 1s linear infinite";
  document.querySelector("body").style.animation = "morning 3s linear ";
  document.querySelector("body").style.animationFillMode = "forwards";
  document.querySelector(".blade").style.animationDelay = "2s";
  document.querySelector(".sun").style.animation = "sun1 3s linear";
  document.querySelector(".sun").style.animationFillMode = "forwards";
}
function Afternoon() {
  document.querySelector(".blade").style.animation =
    "rotate .5s linear infinite";
  document.querySelector("body").style.animation = "afternoon 3s linear ";
  document.querySelector("body").style.animationFillMode = "forwards";
  document.querySelector(".blade").style.animationDelay = "2s";
  document.querySelector(".sun").style.animation = "sun2 5s linear";
  document.querySelector(".sun").style.animationFillMode = "forwards";
}
function Evening() {
  document.querySelector(".blade").style.animation =
    "rotate 2s linear infinite";
  document.querySelector("body").style.animation = "evening 3s linear ";
  document.querySelector("body").style.animationFillMode = "forwards";
  document.querySelector(".blade").style.animationDelay = "2s";
  document.querySelector(".sun").style.animation = "sun3 5s linear";
  document.querySelector(".sun").style.animationFillMode = "forwards";
}
function Night() {
  document.querySelector(".blade").style.animation = "none";
  document.querySelector("body").style.animation = "night 3s linear ";
  document.querySelector("body").style.animationFillMode = "forwards";
  document.querySelector(".blade").style.animationDelay = "2s";
  document.querySelector(".sun").style.animation = "sun4 3s linear";
  document.querySelector(".sun").style.animationFillMode = "forwards";
}
