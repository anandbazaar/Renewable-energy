var icon = document.getElementById("icon");
if (sessionStorage.getItem("dark") == "true") {
  document.body.classList.toggle("dark-theme");
  icon.src = "../../Assets/sun.png";
} else {
  document.body.classList.remove("dark-theme");
  icon.src = "../../Assets/moon.png";
  sessionStorage.setItem("dark", "false");
}
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../../Assets/sun.png";
    sessionStorage.setItem("dark", "true");
  } else {
    icon.src = "../../Assets/moon.png";
    sessionStorage.setItem("dark", "false");
  }
};
