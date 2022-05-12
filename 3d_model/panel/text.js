const infoText = document.createElement("p");
const infoBox = document.createElement("div");
infoText.style.fontFamily = "'Lato', sans-serif";
const infoCont = document.querySelector(".infoCont");
const icon = document.createElement("img") 
icon.src = "../textures/image_53.png"
icon.classList.add("icon")
infoBox.classList.add("infoBox")
infoBox.style.marginTop = "50%";
const info = [
  infos[1].one,
  infos[1].two,
  infos[1].three,
  infos[1].four,
  infos[1].five,
  infos[1].six,
  infos[1].seven,
  infos[1].eight,
  infos[1].nine,
  infos[1].ten,
  infos[1].eleven,
  infos[1].twelve,
  infos[1].thirteen,
  infos[1].fourteen,
  infos[1].fifteen,
  infos[1].sixteen,
  infos[1].seventeen,
  
];
let i = 0;
infoText.innerText = info[i];
infoBox.appendChild(icon)
infoBox.appendChild(infoText);

infoCont.appendChild(infoBox);

let direction = "left";
//listener

let overHundred = false;
let belowHundred = false;
document.addEventListener("wheel", (e) => {
  if (e.deltaY > 100 && !overHundred) {
    overHundred = true;

    i++;
    infoBox.classList.remove("aft");
    infoBox.classList.add("gtb");
    console.log(i, e.deltaY, overHundred);
  }
  if(e.deltaY<-100 && !belowHundred){
    belowHundred = true;
    i--
    infoBox.classList.remove("aft");
    infoBox.classList.add("gtt");
    console.log(i, e.deltaY, overHundred);
  }
});
//move
infoCont.addEventListener("animationend", () => {
  if(overHundred){
    infoBox.classList.remove("gtb");
    infoBox.classList.add("aft");
    if(i>=17) i=0

    infoBox.innerHTML = ""
    infoBox.appendChild(icon)
    infoBox.innerHTML += info[i];
    overHundred = false;
  }
  if(belowHundred){
    infoBox.classList.remove("gtt");
    infoBox.classList.add("aft");
    if(i<0) i=16
  
    infoBox.innerHTML = ""
    infoBox.appendChild(icon)
    infoBox.innerHTML += info[i];
    belowHundred = false;
  }
})
// infoCont.addEventListener("animationend", () => {
//   if (direction === "right") {
//     infoCont.classList.remove("h2r");
//     infoCont.classList.remove("afl");
//     infoCont.classList.remove("h2l");
//     infoCont.classList.add("afr");
//     infoCont.style.justifyContent = "flex-end"
//     infoCont.style.left = "calc(100% - 48%)";
//   } else if (direction === "left") {
//     infoCont.classList.remove("h2r");
//     infoCont.classList.remove("afr");
//     infoCont.classList.remove("h2l");
//     infoCont.classList.add("afl");
//     infoCont.style.justifyContent = "flex-start"
//     infoCont.style.left = "18%";
//   }
// });

// function move() {
//   if (direction === "right") {
//     infoCont.classList.remove("h2r");
//     infoCont.classList.remove("afr");
//     infoCont.classList.remove("afl");
//     infoCont.classList.add("h2l");
//   }
//   if (direction === "left") {
//     infoCont.classList.remove("h2l");
//     infoCont.classList.remove("afr");
//     infoCont.classList.remove("afl");
//     infoCont.classList.add("h2r");
//   }
// }
