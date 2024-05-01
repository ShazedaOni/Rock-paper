let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-scores");
const compScorePara = document.querySelector("#comp-score")

const genComputerChoice = () => {
//rock,paper,scissors
  const options = ["rock", "paper", "scissors"];
 const ranIndx =  Math.floor(Math.random()*3);
 return options[ranIndx];
}
const drawGame = () => {
    //console.log("game was draw.");
    msg.innerText= " Game was DRAW!play Again";
    msg.style.backgroundColor = "#081b31"
};
const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        //console.log("You Win");
        msg.innerText =`You Win! Your ${userChoice} beats ${computerChoice}`;

        msg.style.backgroundColor = "olive";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You Lose");
        msg.innerText = `You Lost! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    //console.log("user choice=", userChoice);
    //generate computer choice -> modular
    const computerChoice = genComputerChoice();
    //console.log("comp choice=", computerChoice);

if(userChoice === computerChoice) {
    //DrawGame
    drawGame();
}
else {
    let userWin = true;
    if(userChoice==="rock"){
        //scissors, paper
        userWin = computerChoice === "paper" ? false : true;
    }
    else if(userChoice==="paper"){
        //scissors, rock
       userWin = computerChoice === "scissors" ? false : true;
    } else {
        // rock, paper
        userWin = computerChoice === "rock" ? false : true;
    }
    showWinner (userWin, userChoice,computerChoice);
}
};


choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");

       playGame(userChoice);
    });
});