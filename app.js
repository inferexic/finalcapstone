document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();
    calculateResult();
});

function calculateResult() {
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    if (answers.length < 12) {
        alert("Please answer all questions!");
        return;
    }

    const scores = {
        anger: 0,
        passion: 0,
        happiness: 0,
        calm: 0,
        sadness: 0,
        mysterious: 0
    };

    answers.forEach(answer => {
        scores[answer.value]++;
    });

    let result = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    localStorage.setItem("quizResult", result);

    window.location.href = "./result.html";



}
