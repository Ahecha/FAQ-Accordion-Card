const changeImg = document.querySelector(".image").src="./images/illustration-woman-online-desktop.svg";
const questions = document.querySelectorAll(".questions");


function imgChanger(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
    return changeImg;
  }
}

let mediaQuery = window.matchMedia("(max-width: 440px)")
imgChanger(mediaQuery) // Call listener function at run time
mediaQuery.addListener(imgChanger);

const hideAnswers = (e) => {
  const answers = Array.from(document.querySelectorAll(".answers"));
  answers.forEach(element => {
    if(!element.isEqualNode(e.currentTarget.nextElementSibling)) {
      element.style.display = "none";
      element.previousElementSibling.style.setProperty("font-weight", "400");
    }
  });
}

const disappear = (e)=> {
    hideAnswers(e);
    const answer = e.currentTarget.nextElementSibling;
    if(answer.style.display == "block") {
      answer.style.setProperty("display", "none");
    } else {
      e.currentTarget.style.setProperty("font-weight", "700");
      answer.style.setProperty("display", "block");
    }
};
  
questions.forEach(element => {
  element.addEventListener("click", disappear);
})
