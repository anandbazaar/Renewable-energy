let intrans = false
let phone = false;
const infoText = document.createElement("p");
const infoBox = document.createElement("div");
infoText.style.fontFamily = "'Lato', sans-serif";
const infoCont = document.querySelector(".infoCont");
const icon = document.createElement("img") 
icon.src = "../textures/image_53.png"
icon.classList.add("icon")
infoBox.classList.add("infoBox")

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
infoBox.innerHTML += info[i]
infoBox.style.fontSize = "20px";
infoCont.appendChild(infoBox);


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
    if (i < 0) i = 16;
    infoBox.innerHTML = "";
    infoBox.appendChild(icon);
    infoBox.innerHTML += info[i];
    belowHundred = false;
  }
});

infoBox.addEventListener("transitionstart", () => {});

infoBox.addEventListener("transitionend", () => {
  if (infoBox.style.opacity == "0") {
    infoBox.style.fontSize = "20px";
    i++;
    if (i >= 17) i = 0;
    infoBox.innerHTML = "";
    infoBox.appendChild(icon);
    infoBox.innerHTML += info[i];
    infoBox.style.opacity = "1";
  }
  inTrans = false;
});
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
if (window.innerWidth <= 416) {
  phone = true;
}

