const changeImg = document.querySelector(".image").src="./images/illustration-woman-online-desktop.svg";
const question = document.querySelectorAll(".questions");
const arrow = document.querySelector(".arrow-down");
const answer = document.querySelector(".answers");
const question2 = document.querySelector(".questions");


function imgChanger(mediaQuery) {
  if (mediaQuery.matches) { // If media query matches
    return changeImg;
  }
}

let mediaQuery = window.matchMedia("(max-width: 440px)")
imgChanger(mediaQuery) // Call listener function at run time
mediaQuery.addListener(imgChanger);


const disappear = (e)=> {
  let answers = e.currentTarget.answer;
  let questions = e.currentTarget.question2;
  let arrowIcon = e.currentTarget.arrow;
  

  if (answer.style.display === "none") {
    answer.style.display = "block";
    question2.style.setProperty("font-weight", "700");
    arrow.style.transform= "rotate(180deg)";
} else {
  answer.style.display = "none";
  question2.style.fontWeight = "400";
  arrow.style.transform= "rotate(0deg)";
}

};

for (let questions of question) {
  answer.style.display = "none";
  questions.addEventListener("click", disappear);

}

