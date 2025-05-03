"use strict";

function randomic(){
    return Math.trunc(Math.random()*20) + 1;
}

function multiple_listener(events, element, handler){
    events.forEach(event => element.addEventListener(event, handler));
}

let random_num = randomic();
console.log(random_num + " <-- random num");

let attempt_count = 1;
let highscore_count = 20;

const mensagem = document.querySelector(".message");
const secret_number = document.querySelector(".number");
const attempt = document.querySelector(".attempt");
const highscore = document.querySelector(".highscore");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

const setMensagem = (text) => mensagem.textContent = text;

const guessVerifier = () => {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess || guess > 20)
    {
        setMensagem("Insert a valid number...");
        !guess ? console.error("Number = NaN") : console.warn("Number out of the limit");
    }
    else if (guess === random_num)
    {
        secret_number.style.width = "30rem";
        secret_number.textContent = guess;
        setMensagem("You win🎉🎉🎉");
        document.body.style.backgroundColor = "#60b347";
        btnCheck.style.pointerEvents = "none";

        if (attempt_count < highscore_count)
        {
            highscore_count = attempt_count;
            highscore.textContent = highscore_count;
        }   
    }
    else{
        if (attempt_count < 19)
        {
            setMensagem(guess > random_num ? "📈Too high" : "📉Too low");
            attempt_count++;
            attempt.textContent = attempt_count;
        } else {
            document.body.style.backgroundColor = "darkred";
            mensagem.innerHTML = `You lose😑😑<br>Press "again", to restart!`;
            attempt.textContent = attempt_count + 1;
            btnCheck.style.pointerEvents = "none";

        }
    }
}

const reset = () => {
    document.querySelectorAll("*").forEach(element => {
        element.removeAttribute("style");
    });
    random_num = randomic();
    console.log(random_num);
    attempt_count = 0;
    secret_number.textContent = "?";
    attempt.textContent = attempt_count;
    setMensagem("Start guessing...");
    document.querySelector(".guess").value = "";
}

document.querySelector(".guess").addEventListener("keydown", (e) => {
    if (e.key === "Enter") guessVerifier();
})

btnCheck.addEventListener("click", guessVerifier);

btnAgain.addEventListener("click", reset);

document.addEventListener("keydown", (e) => {
    if (e.key === "r")
    {
        reset();
    }
})



