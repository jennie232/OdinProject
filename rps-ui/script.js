let rock = document.getElementById("rock");
let scissor = document.getElementById("scissor");
let paper = document.getElementById("paper");
let round = document.getElementById("round");
let start = document.getElementById("start");
let intro = document.getElementById("intro");
let winLoss = document.getElementById("win-header");
let win = document.getElementById("win");
let loss = document.getElementById("lose");
let tie = document.getElementById("tie");
let messageComp = document.getElementById("message-comp");
let messageUser = document.getElementById("message-user");
let messageText = document.getElementById("message-text");
let winner = 0;
let loser = 0;
let tied = 0;



//rock.addEventListener("click", playGame());

//computer's rock paper scissor 
function computerPlay() {
    const game = ["rock", "paper", "scissor"]
    return game[Math.floor(Math.random() * 3)]
}
//single round
function playRound(computerSelection, playerSelection) {
    if (playerSelection === "rock") {
        messageUser.innerHTML = "You chose: rock";
        if (computerSelection == "paper") {
            messageComp.innerHTML = "Computer chose: paper";
            return "You lose. Paper beats rock"
        } else if (computerSelection == "rock") {
            messageComp.innerHTML = "Computer chose: rock";
            return "Nobody wins. Try again"
        } else {
            messageComp.innerHTML = "Computer chose: scissor";
            return "You win. rock beats scissor"
        }
    } else if (playerSelection === "paper") {
        messageUser.innerHTML = "You chose: paper";
        if (computerSelection == "paper") {
            messageComp.innerHTML = "Computer chose: paper";
            return "Nobody wins. Try again"
        } else if (computerSelection == "rock") {
            messageComp.innerHTML = "Computer chose: rock";
            return "You win. Paper beats rock";
        } else {
            messageComp.innerHTML = "Computer chose: scissor";
            return "You lose. Scissor beats paper";
        }
    } else {
        messageUser.innerHTML = "You chose: scissor";
        if (computerSelection == "paper") {
            messageComp.innerHTML = "Computer chose: paper";
            return "You win. Scissor beats paper"
        } else if (computerSelection == "rock") {
            messageComp.innerHTML = "Computer chose: rock";
            return "You lose. Rock beats scissor";
        } else {
            messageComp.innerHTML = "Computer chose: scissor";
            return "Nobody wins. Try again";
        }
    }
}

const game = (playerSelection) => {
    if (winner == 5 || loser == 5) {
        
        quitGame();
    } else {

        const computerSelection = computerPlay()
        const statement = playRound(computerSelection, playerSelection)

        if (statement.includes("You win")) {
            winner++
            win.innerHTML = "Win: " + winner;
        } else if (statement.includes("You lose")) {
            loser++;
            loss.innerHTML = "Lose: " + loser;
        } else if (statement.includes("Nobody wins")) {
            tied++;
            tie.innerHTML = "Tie: " + tied;
        }
    }

    // if (user == 5) {
    //     console.log("You win. Computer only got " + comp + " points, and you got " + user + " points. Congrats..")
    // } else {
    //     console.log("You lose. You only got " + user + " points while the computer scored " + comp + " points. Try again..")
    // }
}
rock.addEventListener("click", function () {
    game("rock");
});
paper.addEventListener("click", function () {
    game("paper");
});
scissor.addEventListener("click", function () {
    game("scissor");
});
start.addEventListener("click", function () {
   
    startRound();
});
function startRound() {
    
    start.style.display = "none";
    intro.style.display = "none";
    winLoss.style.display = "flex";

    winner = 0;
    loser = 0; 
    tied = 0; 
    win.innerHTML = "Win: " + winner;
    loss.innerHTML = loser;
    tie.innerHTML = tied;
    loss.innerHTML = "Lose: " + loser;
    tie.innerHTML = "Tie: " + tied;

    messageComp.innerHTML="Computer chose: ";
    messageUser.innerHTML="You chose: ";
}
function quitGame(){
   
    start.style.display = "flex";
    start.style.width = "auto";
    start.style.justifyContent="center";
    messageComp.innerHTML="";
    messageUser.innerHTML="";
    start.innerHTML = "Play Again?"

    
}