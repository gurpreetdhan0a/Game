//Setting the Variables

let userScore=0;
let computerScore=0;
const userScore_=document.getElementById("user-score");
const computerScore_=document.getElementById("comp-score");
const result_=document.querySelector(".result >p");
const rock_=document.getElementById("r");
const paper_=document.getElementById("p");
const scissors_=document.getElementById("s");

//Function to get a random Computer Choice

function getComputerChoice()
{
  const choices = ['r','p','s'];
  const randomNumber=(Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

//Coverting user and computer choice in Words

function convertToWord(letter)
{
  if (letter==="r") return "Rock";
  if (letter==="p") return "Paper";
  if (letter==="s") return "Scissors";
}

// Function if user Wins

function win(userChoice,computerChoice)
{
  const userChoice_=document.getElementById(userChoice);
  userScore++;
  userScore_.innerHTML=userScore;
  computerScore_.innerHTML=computerScore;
  result_.innerHTML=  convertToWord(userChoice)+" beats " + convertToWord(computerChoice)+" You Win.";
  userChoice_.classList.add('green-glow');
  setTimeout(function() {userChoice_.classList.remove('green-glow')},300);
}

//Function if user loses

function lose(userChoice,computerChoice)
{
  const userChoice_=document.getElementById(userChoice);
  computerScore++;
  userScore_.innerHTML=userScore;
  computerScore_.innerHTML=computerScore;
  result_.innerHTML=  convertToWord(userChoice)+" loses to " + convertToWord(computerChoice)+" You Lose."
  userChoice_.classList.add('red-glow');
  setTimeout(function() {userChoice_.classList.remove('red-glow')},300);
}

 //Function if it's a draw
function draw(userChoice,computerChoice)
{
  const userChoice_=document.getElementById(userChoice);
 result_.innerHTML=  convertToWord(userChoice)+" equals " + convertToWord(computerChoice)+" It's a draw."
 userChoice_.classList.add('gray-glow');
 setTimeout(function() {userChoice_.classList.remove('gray-glow')},300);
}

getComputerChoice();

//Comparing the choices function

function game(userChoice)
{
 const computerChoice=getComputerChoice();
 switch (userChoice+computerChoice)
 {
   case "rs":
   case "pr":
   case "sp":
   win(userChoice,computerChoice);
   break;

 case "rp":
 case "ps":
 case "sr":
 lose(userChoice,computerChoice);
 break;

 case "rr":
 case "pp":
 case "ss":
 draw(userChoice,computerChoice);
 break;
}
}

function main()
{
  rock_.addEventListener('click', function()
  {
    game("r");
  })

  paper_.addEventListener('click', function()
  {
    game("p");
  })

  scissors_.addEventListener('click', function()
  {
    game("s");
  })
}

main();
