let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

const genComputerChoice = () => {
    let options = ["stone" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];                    


}

const msg = document.querySelector("#msg");

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was a draw!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    }
    else
    {
    compScore++;
    compScorePara.innerText = userScore;
    console.log("You lost!!");
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice = " , compChoice);

    if(userChoice === compChoice)
    drawGame();
    else{
        let userWin = true;
        if(userChoice === "stone")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "stone" ? false : true;

        }

        showWinner(userWin , userChoice , compChoice);
    }

}


choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked" , userChoice);
        playGame(userChoice);
    })
})