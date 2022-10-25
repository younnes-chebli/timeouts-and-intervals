const word = "prout!";
const prout = document.getElementById("prout");
let typeWriterIntervalId;
let i = 0;

const writeWord = () => {
    prout.innerText = "";
    typeWriterIntervalId = setInterval(() => {
        prout.innerText += word[i];
        i++;
        if(i == word.length)
            clearInterval(typeWriterIntervalId);
    }, 1000);
};

const proutLauncher = document.getElementById("prout-launcher");
proutLauncher.addEventListener("click", writeWord);

//////

const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
let sec = 0;
let min = 0

setInterval(() => {
    seconds.innerText = `Time elapsed: ${sec} seconds`;
    sec++;
    if(sec == 60) {
        min++;
        sec = 0;
        minutes.innerText = `${min} minutes has passed`;
    }
}, 1000);

//////

const moles = document.querySelectorAll(".mole");
setInterval(() => {
    const pos = Math.floor(Math.random() * 12);
    moles[pos].style.backgroundColor = "red";
    setTimeout(() => {
        moles[pos].style.backgroundColor = "white";
    }, 1000);
}, 2000);

const score = document.getElementById("score-number");
let scoreNumber = 0;
score.innerText = scoreNumber;

const tapMole = (e) => {
    if(e.target.style.backgroundColor == "red") {
        scoreNumber++;
        score.innerText = scoreNumber;
    }
};

for(const mole of moles) {
    mole.addEventListener("click", tapMole);
}

const resetScore = () => {
    scoreNumber = 0;
    score.innerText = scoreNumber;
};

const resetScoreButton = document.getElementById("reset-score-button");
resetScoreButton.addEventListener("click", resetScore);