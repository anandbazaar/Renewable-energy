const infoText = document.createElement("p");
const infoBox = document.createElement("div");
infoText.style.fontFamily = "'Lato', sans-serif";
const infoCont = document.querySelector(".infoCont");
const icon = document.createElement("img") 
icon.src = "../textures/image_54.png"
icon.classList.add("icon")
infoBox.classList.add("infoBox")
infoBox.style.marginTop = "50%";
const info = [
  infos[2].one,
  infos[2].two,
  infos[2].three,
  infos[2].four,
  infos[2].five,
  infos[2].six,
  infos[2].seven,
  
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
    if(i>=7) i=0

    infoBox.innerHTML = ""
    infoBox.appendChild(icon)
    infoBox.innerHTML += info[i];
    overHundred = false;
  }
  if(belowHundred){
    infoBox.classList.remove("gtt");
    infoBox.classList.add("aft");
    if(i<0) i=6
  
    infoBox.innerHTML = ""
    infoBox.appendChild(icon)
    infoBox.innerHTML += info[i];
    belowHundred = false;
  }
})
infoCont.addEventListener("animationend", () => {
  if (direction === "right") {
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afl");
    infoCont.classList.remove("h2l");
    infoCont.classList.add("afr");
    infoCont.style.justifyContent = "flex-end"
    infoCont.style.left = "calc(100% - 48%)";
  } else if (direction === "left") {
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afr");
    infoCont.classList.remove("h2l");
    infoCont.classList.add("afl");
    infoCont.style.justifyContent = "flex-start"
    infoCont.style.left = "18%";
  }
});

function move() {
  if (direction === "right") {
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afr");
    infoCont.classList.remove("afl");
    infoCont.classList.add("h2l");
  }
  if (direction === "left") {
    infoCont.classList.remove("h2l");
    infoCont.classList.remove("afr");
    infoCont.classList.remove("afl");
    infoCont.classList.add("h2r");
  }
}
