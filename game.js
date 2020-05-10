//POPUP RULES

var popup = $(".rules-popup");
var rulesButton = $(".rules-button");
var closeButton = $(".close-popup");
var selectedButton;
var score = $(".current-score").text();
var selectionDone = false;

rulesButton.on("click", function() {
  popup.show();
});

closeButton.on("click", function() {
  popup.hide();
});


//PLAYER'S SELECTION

$(".player .circle-button").on("click", function(e) {
  if(selectionDone === false) {
  selectedButton = e.currentTarget.classList[1];

  $(".player.border-circle").hide();
  $(".player.border-circle." + selectedButton).show().attr("id", "selected-button");
  $(".you-title").show();
  $(".house-title").show();
  $(".game-div").css("background-image", "none");

  generateRandomNumber();
  computerTurn();

  selectionDone = true;
  }
});


//COMPUTER'S SELECTION

var options = ["paper", "scissors", "rock"];
var randomNumber;
var computerSelection;

function generateRandomNumber() {
   randomNumber = Math.floor(Math.random()*3);
   computerSelection = options[randomNumber];
 };

function computerTurn() {

  $(".computer.border-circle." + computerSelection).show();

  winnerSelection();

  $(".play-again").show();
};


//WINNER SELECTION

function winnerSelection() {
if (computerSelection === "paper" && selectedButton === "scissors") {
  $(".you-win").show();
  $(".current-score").text(++score);
} else if (computerSelection === "paper" && selectedButton === "rock") {
  $(".house-win").show();
  $(".current-score").text(--score);
} else if (computerSelection === "rock" && selectedButton === "paper") {
  $(".you-win").show();
  $(".current-score").text(++score);
} else if (computerSelection === "rock" && selectedButton === "scissors") {
  $(".house-win").show();
  $(".current-score").text(--score);
} else if (computerSelection === "scissors" && selectedButton === "rock") {
  $(".you-win").show();
  $(".current-score").text(++score);
} else if (computerSelection === "scissors" && selectedButton === "paper") {
  $(".house-win").show();
  $(".current-score").text(--score);
} else {
  $(".draw").show();
}};


//PLAY AGAIN

$(".play-again").on("click", function() {
  $(".player.border-circle").show();
  $(".player.border-circle." + selectedButton).removeAttr("id", "selected-button");
  $(".you-title").hide();
  $(".house-title").hide();
  $(".game-div").css("background-image", 'url("images/bg-triangle.svg")');
  $(".computer.border-circle." + computerSelection).hide();
  $(".play-again").hide();
  $(".result").hide();

  selectionDone = false;
})
