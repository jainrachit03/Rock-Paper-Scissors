let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options = ["rock","paper","scisor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You Win! , Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compScore++;
        compScorePara.innerText = compScore;

        console.log("You lose!");
        msg.innerText = `You Lose , ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }

};
const playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice);

    // Game is draw 
    if(userChoice === compChoice){
        console.log("Match is draw");
        msg.innerText = "Match is draw";
        msg.style.backgroundColor = "goldenrod";
    }
    else {
       let userWin = true; 
        if( userChoice === "paper" )
        {
            userWin = compChoice === "scisor" ? false : true;
        }
        else if(userChoice === "scisor"){
            userWin = compChoice === "rock" ? false : true;

        }
        else{
            userWin = compChoice === "paper" ? false:true;
        }
    
    showWinner(userWin,userChoice,compChoice);
    }};

    

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice,"was clicked");
        playGame(userChoice);
    });
});