// using selectors inside the element"
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener('click', function(){

        questions.forEach(function (item) {
            if(item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});





//traversing the dom

// const btns = document.querySelectorAll('.quetion-btn');

// btns.forEach(function(btn) {
//  btn.addEventListener("click", function (e) {
//     const quetion = e.currentTarget.parentElement.parentElement;
//     quetion.classList.toggle("show-text");
//  });
// });