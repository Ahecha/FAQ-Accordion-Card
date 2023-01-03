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