const elements = document.querySelectorAll(".scroll-animated");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY + window.innerHeight;
  Array.from(elements).forEach((element) => {
    const top = element.offsetTop + element.getBoundingClientRect().height;
    if (scroll > top) {
      element.classList.add("scroll-animation");
    }
  });
});
