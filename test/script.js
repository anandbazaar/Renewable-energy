const myQuestions = [
  {
    question: "Q1. Чи ямар ухаантай хүн бэ?",
    answers: [
      { text: "Ухаалаг ном", correct: true },
      { text: "Ерөнхий ухаантай", correct: true },
      { text: "Хүмүүс ухаантай", correct: true },
      { text: "Би биш", correct: false },
    ],
  },
  {
    question: "Q2. Аль нь сэргээгдэх эрчим хүчний эх үүсвэр биш вэ?",
    answers: [
      { text: "салхи ", correct: false },
      { text: "бензин", correct: true },
      { text: "салхи", correct: false },
      { text: "нар", correct: false },
    ],
  },
  {
    question:
      "Q3. Сэргээгдэх эрчим хүчний аль эх үүсвэр нь амьд биетүүдийг ашигладаг дулаан эсвэл цахилгаан үйлдвэрлэх үү?",
    answers: [
      { text: "салхи", correct: false },
      { text: "ус", correct: false },
      { text: "биомасс", correct: true },
      { text: "нарны", correct: false },
    ],
  },
  {
    question:
      "Q4. Сэргээгдэх эрчим хүчний аль эх үүсвэр нь гол мөрөн эсвэл далайг ашигладаг цахилгаан үйлдвэрлэх үү?",
    answers: [
      { text: "салхи ", correct: false },
      { text: "ус", correct: true },
      { text: "салхи", correct: false },
      { text: "нар", correct: false },
    ],
  },
  {
    question: "Q5. Сэргээгдэхгүй эрчим хүчний жишээ аль нь вэ?",
    answers: [
      { text: "салхи ", correct: false },
      { text: "бензин", correct: true },
      { text: "салхи", correct: false },
      { text: "нүүрс", correct: true },
    ],
  },
  {
    question: "Q6. Эдгээрийн аль нь сэргээгдэх эрчим хүчний эх үүсвэр вэ?",
    answers: [
      { text: "салхи ", correct: true },
      { text: "ус", correct: true },
      { text: "салхи", correct: true },
      { text: "нар", correct: true },
    ],
  },
  {
    question:
      "Q7. Дараахь зүйлсийн аль нь сэргээгдэх эрчим хүчийг ашиглах давуу тал вэ?",
    answers: [
      { text: "Төгсгөлгүй нийлүүлэлт", correct: true },
      { text: "Бохирдол үүсгэдэг", correct: false },
      { text: "ом хэмжээний газар шаардлагатай", correct: false },
      { text: "Эрчим хүчний хараат бус байдлыг дэмжих", correct: true },
    ],
  },
  {
    question: "Q8. Аль нь нарны эрчим хүчний сул тал вэ?",
    answers: [
      { text: "Суурилуулалтын өндөр өртөг", correct: true },
      { text: "Олон хэрэглээ", correct: false },
      { text: "Идэвхгүй нарны эрчим хүч", correct: false },
      { text: "Илүү үнэтэй", correct: false },
    ],
  },
  {
    question:
      "Q9. Байгаль дээр тасралтгүй нөхөн сэргээгдэж байдаг хэдэн энерги байдаг вэ?",
    answers: [
      { text: "12", correct: false },
      { text: "8", correct: true },
      { text: "9", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question: "Q10. Энэ зураг ямар эрчим хүчных вэ ?",
    answers: [
      { text: "салхи ", correct: false },
      { text: "био масс", correct: true },
      { text: "салхи", correct: false },
      { text: "газрын гүний дулаан", correct: false },
    ],
  },
];

const next = document.getElementById('submit')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')