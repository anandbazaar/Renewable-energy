const infoText = document.createElement("p");
const infoBox = document.createElement("div");
infoText.style.fontFamily = "'Lato', sans-serif"
const infoCont = document.querySelector(".infoCont");
infoBox.style.marginTop = "50%"

const info = [
  "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsumLorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  "dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom",
  "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  "iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum \n iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum ",
  "dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom",
  "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  "iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum \n iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum ",
  "dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom",
  "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  "iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum \n iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum ",
  "dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom",
  "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  "iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum \n iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum ",
  "dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom",
];
let i = 0;
infoText.innerText = info[i];
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
    infoBox.innerText = info[i];
    overHundred = false;
  }
  if(belowHundred){
    infoBox.classList.remove("gtt");
    infoBox.classList.add("aft");
    infoBox.innerText = info[i];
    belowHundred = false;
  }
})
infoCont.addEventListener("animationend", () => {
  if (direction === "right") {
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afl");
    infoCont.classList.remove("h2l");
    infoCont.classList.add("afr");
    infoCont.style.left = "calc(100% - 33%)";
  } else if (direction === "left") {
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afr");
    infoCont.classList.remove("h2l");
    infoCont.classList.add("afl");
    infoCont.style.left = "0px";
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
