const infoBox = document.createElement("p");
const infoCont = document.querySelector(".infoCont")

const info = ["Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum \n ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum\n ipsum Lorum ipsum Lorum ipsum Lorum ipsum",
"iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum \n iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum iosum ",
"dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom \n dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom dom"]
infoBox.innerText = info[0]
infoCont.appendChild(infoBox)
const textChange = (i) =>{
    infoBox.innerText = info[i]
}
