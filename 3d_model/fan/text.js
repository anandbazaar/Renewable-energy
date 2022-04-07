const infoBox = document.createElement("p");
const infoCont = document.querySelector(".infoCont");
const dropBox = document.createElement("div");
dropBox.classList.add("dropBox");
dropBox.innerText = "<";

const info = [
  "Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
  "iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum \n iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum ",
  "dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom",
];
infoBox.innerText = info[0];
infoCont.appendChild(infoBox);
// infoCont.appendChild(dropBox)

let direction = "left";

//move
infoCont.addEventListener("animationend", () => {
  if (direction === "right") {
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afl");
    infoCont.classList.remove("h2l");
    infoCont.classList.add("afr");
    infoCont.style.left = "calc(100% - 740px)";
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
    // infoCont.style.transition = "500ms";
    // infoCont.style.left = "-740px";
    // setTimeout(() => {
    //   infoCont.style.transition = "0ms";
    //   infoCont.style.left = window.innerWidth.toString() + "px";
    // }, 500);
    // setTimeout(() => {
    //     infoCont.style.transition = "500ms";
    //     infoCont.style.left = (window.innerWidth - 740).toString() + "px";
    // }, 600);
    infoCont.classList.remove("h2r");
    infoCont.classList.remove("afr");
    infoCont.classList.remove("afl");
    infoCont.classList.add("h2l");
  }
  if (direction === "left") {
    // infoCont.style.transition = "500ms";
    // infoCont.style.left = window.innerWidth.toString() + "px";
    // setTimeout(() => {
    //   infoCont.style.transition = "0ms";
    //   infoCont.style.left = "-740px";
    // }, 500);
    // setTimeout(() => {
    //   infoCont.style.transition = "500ms";
    //   infoCont.style.left = "0px";
    // }, 600);
    infoCont.classList.remove("h2l");
    infoCont.classList.remove("afr");
    infoCont.classList.remove("afl");
    infoCont.classList.add("h2r");
  }
}

const textChange = (i) => {
  infoBox.innerText = info[i];
};
