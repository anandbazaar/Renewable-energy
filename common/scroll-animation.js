const elements = document.querySelectorAll(".scroll-animated");

const handleScroll = () => {
  const scroll = window.scrollY + window.innerHeight;
  console.log(scroll, "scrol");
  Array.from(elements).forEach((element, index) => {
    const top = element.offsetTop + element.getBoundingClientRect().height;
    console.log(index, top);
    if (scroll > top) {
      element.classList.add("scroll-animation");
    }
  });
};

window.addEventListener("scroll", handleScroll);

handleScroll();
