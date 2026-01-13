const result = localStorage.getItem("quizResult");

if (!result) {
    window.location.href = "index.html";
}
const resultData = {
    anger: {
        title: "Anger",
        img: "results/blaze.jpg",
        desc: "You feel emotions intensely and react strongly to situations."
    },
    passion: {
        title: "Passion",
        img: "results/amber.png",
        desc: "You are driven, motivated, and full of ambition."
    },
    happiness: {
        title: "Happiness",
        img: "results/apollo.png",
        desc: "You spread positivity and joy wherever you go."
    },
    calm: {
        title: "Calm",
        img: "results/willow.png",
        desc: "You are peaceful, balanced, and grounded."
    },
    sadness: {
        title: "Sadness",
        img: "results/tristan.png",
        desc: "You feel deeply and understand emotions well."
    },
    mysterious: {
        title: "Mysterious",
        img: "results/raven.png",
        desc: "You are thoughtful, complex, and intriguing."
    }
};

document.getElementById("resultTitle").textContent = resultData[result].title;
document.getElementById("resultDescription").textContent = resultData[result].desc;
document.getElementById("resultImage").src = resultData[result].img;