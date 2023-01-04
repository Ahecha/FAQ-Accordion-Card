const changeImg = document.querySelector(".image").src="./images/illustration-woman-online-desktop.svg";
let question = document.querySelector(".questions");


function imgChanger(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
    return changeImg;
  }
}

let mediaQuery = window.matchMedia("(max-width: 440px)")
imgChanger(mediaQuery) // Call listener function at run time
mediaQuery.addListener(imgChanger);



function counter(question) {
   return document.querySelector(".answers").style.display = "block";
    
};

question.addEventListener("click", counter);


/* const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".question__button");
  const questionText = question.querySelector(".question__title__text");
  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });

  questionText.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
}); */