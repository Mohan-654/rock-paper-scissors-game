let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compScorePara = document.querySelector("#comp-score");
const userScorePara = document.querySelector("#user-score");


const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw , Play again !"
};


const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =` You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = ` You lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "Red"

    }
};



const playGame = (userChoice) => {
    console.log("user choice is :" , userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice is :" , compChoice);

    if(userChoice === compChoice){
    // draw game
    drawGame();
    }

    else {
        let userWin = true;
        if(userChoice === "rock") {
        // paper , Scissors
        userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice === "paper") {
        // rock , Scissors
        userWin = compChoice === "scissors" ? false : true
        }
        else {
        // paper , rock
        userWin = compChoice === "rock" ? false : true
        }

        showWinner( userWin , userChoice , compChoice );

    }

};




choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});