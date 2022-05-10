/*
const quiz = [
  {
    q: "Аль нь сэргээгдэх эрчим хүчний эх үүсвэр биш вэ?",
    option1: "салхи",
    option2: "ус",
    option3: "бензин",
    option4: "нар",
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

*/


const firebaseConfig = {
  apiKey: "AIzaSyAslRu1uMy5JfTZW0LutouT6u4DDhFh96k",
  authDomain: "auth-95e28.firebaseapp.com",
  projectId: "auth-95e28",
  storageBucket: "auth-95e28.appspot.com",
  messagingSenderId: "199003874234",
  appId: "1:199003874234:web:2b44f4b8e15db922477383",
  measurementId: "G-QQV56443VH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
var quiz = []
let allQuizRef = db.collection("quiz");
allQuizRef
  .get()
  .then(function (docs) {
    docs.forEach(function (doc) {
      let data = doc.data();
      data.options = [data.option1, data.option2, data.option3, data.option4];
      quiz.push(data);
   });

   console.log(quiz);
   const homeBox = document.querySelector(".home-box");
   homeBox.querySelector(".total-question").innerHTML = quiz.length


  })
  .catch(function (error) {
    console.log("Error getting document:", error);
  });



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
