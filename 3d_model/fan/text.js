let phone = false;
let inTrans = false;
const infoText = document.createElement("p");
const infoBox = document.createElement("div");
infoText.style.fontFamily = "'Lato', sans-serif";
const infoCont = document.querySelector(".infoCont");
const icon = document.createElement("img");
icon.src = "../textures/image_52.png";
icon.classList.add("icon");
infoBox.classList.add("infoBox");

const info = [
  infos[0].one,
  infos[0].two,
  infos[0].three,
  infos[0].four,
  infos[0].five,
  infos[0].six,
];
let i = 0;

infoBox.appendChild(icon);
infoBox.innerHTML += info[0];
if(phone){
infoBox.style.fontSize = "13px";
}

infoCont.appendChild(infoBox);

// let direction = "left";
//listener
let clik = function () {
  if (phone && !inTrans) {
    if (infoBox.style.opacity === "0") {
      infoBox.style.opacity = "1";
    } else {
      infoBox.style.opacity = "0";
    }
  }
};

let overHundred = false;
let belowHundred = false;

infoCont.addEventListener("click", clik);

document.addEventListener("wheel", (e) => {
  if (e.deltaY > 100 && !overHundred) {
    overHundred = true;

    i++;
    if (phone == false) {
      infoBox.classList.remove("aft");
      infoBox.classList.add("gtb");
    }
    console.log(i, e.deltaY, overHundred);
  }
  if (e.deltaY < -100 && !belowHundred) {
    belowHundred = true;
    i--;
    if (phone == false) {
      infoBox.classList.remove("aft");
      infoBox.classList.add("gtt");
    }
    console.log(i, e.deltaY, overHundred);
  }
});
//move
infoCont.addEventListener("animationend", () => {
  if (overHundred) {
    if (phone == false) {
      infoBox.classList.remove("gtb");
      infoBox.classList.add("aft");
    }
    if (i >= 6) i = 0;
    infoBox.innerHTML = "";
    infoBox.appendChild(icon);
    infoBox.innerHTML += info[i];
    overHundred = false;
  }

  if (belowHundred) {
    if (phone == false) {
      infoBox.classList.remove("gtt");
      infoBox.classList.add("aft");
    }
    if (i < 0) i = 5;
    infoBox.innerHTML = "";
    infoBox.appendChild(icon);
    infoBox.innerHTML += info[i];
    belowHundred = false;
  }
});

infoBox.addEventListener("transitionstart", () => {});

infoBox.addEventListener("transitionend", () => {
  if (infoBox.style.opacity == "0") {
    if(phone)infoBox.style.fontSize = "13px";
    i++;
    if (i >= 6) i = 0;
    infoBox.innerHTML = "";
    infoBox.appendChild(icon);
    infoBox.innerHTML += info[i];
    infoBox.style.opacity = "1";
  }
  inTrans = false;
});
// infoCont.addEventListener("animationend", () => {
//   if (direction === "right" && phone == false) {
//     infoCont.classList.remove("h2r");
//     infoCont.classList.remove("afl");
//     infoCont.classList.remove("h2l");
//     infoCont.classList.add("afr");
//     infoCont.style.justifyContent = "flex-end"
//   } else if (direction === "left" && phone == false) {
//     infoCont.classList.remove("h2r");
//     infoCont.classList.remove("afr");
//     infoCont.classList.remove("h2l");
//     infoCont.classList.add("afl");
//     infoCont.style.justifyContent = "flex-start"
//   }
// });

// function move() {
//   if (direction === "right" && phone == false) {
//     infoCont.classList.remove("h2r");
//     infoCont.classList.remove("afr");
//     infoCont.classList.remove("afl");
//     infoCont.classList.add("h2l");
//   }
//   if (direction === "left" && phone == false) {
//     infoCont.classList.remove("h2l");
//     infoCont.classList.remove("afr");
//     infoCont.classList.remove("afl");
//     infoCont.classList.add("h2r");
//   }
// }
if (window.innerWidth <= 416) {
  phone = true;
}
