const quiz = [
  {
    q: "Аль нь сэргээгдэх эрчим хүчний эх үүсвэр биш вэ?",
    options: ["салхи", "ус", "бензин", "нар"],
    answer: 2,
  },
  {
    q: "Сэргээгдэх эрчим хүчний аль эх үүсвэр нь амьд биетүүдийг ашигладаг дулаан эсвэл цахилгаан үйлдвэрлэх үү?",
    options: ["салхи", "ус", "биомасс", "нар"],
    answer: 2,
  },
  {
    q: "Хамгийн хямд цахилгаан үүсгэвэр аль нь вэ?",
    options: ["салхи", "ус", "биомасс", "нар"],
    answer: 0,
  },
  {
    q: "Салхи хамгийн ихдээ хэдэн хувийн энерги боловсруулах вэ?",
    options: ["50%", "41.3%", "59.3%", "84.3%"],
    answer: 2,
  },
  {
    q: "Сэргээгдэх эрчим хүчний аль эх үүсвэр нь гол мөрөн эсвэл далайг ашигладаг цахилгаан үйлдвэрлэх үү?",
    options: ["салхи", "ус", "биомасс", "нар"],
    answer: 1,
  },
  {
    q: "Сэргээгдэхгүй эрчим хүчний жишээ аль нь вэ?",
    options: ["салхи", "ус", "нар", "нүүрс"],
    answer: 3,
  },
  {
    q: "Дараахь зүйлсийн аль нь сэргээгдэх эрчим хүчийг ашиглах давуу тал вэ?",
    options: [
      "Төгсгөлгүй нийлүүлэлт",
      "Бохирдол үүсгэдэг",
      "Том хэмжээний газар шаардлагатай",
      "Эрчим хүчний хараат бус байдлыг дэмжих",
    ],
    answer: 3,
  },
  {
    q: "Аль нь нарны эрчим хүчний сул тал вэ?",
    options: [
      "Суурилуулалтын өндөр өртөг",
      "Олон хэрэглээ",
      "Идэвхгүй нарны эрчим хүч",
      "Илүү үнэтэй",
    ],
    answer: 0,
  },
  {
    q: "Байгаль дээр тасралтгүй нөхөн сэргээгдэж байдаг хэдэн энерги байдаг вэ?",
    options: ["8", "4", "5", "6"],
    answer: 0,
  },
  {
    q: "Одоогоор дэлхийн энэргийн хэдэн хувийг сэргээгдэх эрчим хүч эзэлдэг вэ?",
    options: [
      "13%",
      "15%",
      "9%",
      "22%",
    ],
    answer: 0,
  },
  
];
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");
const navLogo = document.querySelector("#navbar__logo");
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
