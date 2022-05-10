
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
