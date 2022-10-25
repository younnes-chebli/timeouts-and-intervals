const word = "prout!";
const prout = document.getElementById("prout");
let intervalId;

const writeWord = () => {
    let i = 0;
    intervalId = setInterval(() => {
        prout.innerText += word[i];
        i++;
        if(i == word.length)
            clearInterval(intervalId);
    }, 1000);
};

const proutLauncher = document.getElementById("prout-launcher");
proutLauncher.addEventListener("click", writeWord);