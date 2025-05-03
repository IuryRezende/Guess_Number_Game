"use strict";

function randomic(){
    return Math.trunc(Math.random()*20) + 1;
}

let random_num = randomic();
console.log(random_num + " <-- random num");

let score = 20
let highscore = 0;
console.log(`Score: ${score}\t\tHighscore: ${highscore}`);

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess)
    {
        document.querySelector(".message").textContent = "Insert a number...";
    }
    else if (guess === random_num)
    {
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = guess;
        document.querySelector(".message").textContent = "You win🎉🎉🎉";

        if (score >= highscore)
        {
            console.log(`Return: ${score >= highscore}`);
            highscore = score;

            console.log(`Highscore: ${highscore}`);
            document.querySelector(".highscore").textContent = highscore;
        }   
    }
    else if (guess > random_num)
    {
        document.querySelector(".message").textContent = "📈Too high";
        score-=1;
        document.querySelector(".score").textContent = score;
    }
    else
    {
        document.querySelector(".message").textContent = "📉Too low";
        score-=1;
        document.querySelector(".score").textContent = score;
    }

    if(score <= 0)
    {
        document.body.style.backgroundColor = "darkred";
        document.querySelector(".message").innerHTML = `You lose😑😑🙄<br>Press "again", to restart!`;
        document.querySelector(".check").style.pointerEvents = "none";
    }
});

document.querySelector(".again").addEventListener("click", () =>{
    document.querySelectorAll("*").forEach(element => {
        element.removeAttribute("style");
    });

    random_num = randomic();
    console.log(random_num);
    score = 20;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";

});



