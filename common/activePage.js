const activePage = window.location.pathname.split("/");
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href == activePage[1]) {
    link.classList.add("activePage");
  }
});
