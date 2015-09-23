var score = 0;

var rps = function(userChoice) {
  $("div#output").html("");

  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "Rock";
  } else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  $("img").css("border", "");

  $("img#" + userChoice.toLowerCase()).css("border", "solid 1px #FF9108");

  $("img#compchoice").show().attr("src", computerChoice.toLowerCase() + ".png");

  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      return "The result is a tie!";
    } else if (choice1 === "Rock") {
      if (choice2 === "Scissors") {
        score++;
        return "You win!";
      } else {
        score--;
        return "You lose.";
      }
    } else if (choice1 === "Paper") {
      if (choice2 === "Rock") {
        score++;
        return "You win!";
      } else {
        score--;
        return "You lose.";
      }
    } else if (choice1 === "Scissors") {
      if (choice2 === "Rock") {
        score--;
        return "You lose.";
      } else {
        score++;
        return "You win!"
      }
    } else {
      return "That doesn't make sense."
    }
  };
  var result = compare(userChoice, computerChoice);
  $("span#counter").html(score);
  $("div#output").append(result);
};

$(function() {
  $("img#scissors").click(function() {
    rps("Scissors");
  });

  $("img#rock").click(function() {
    rps("Rock");
  });

  $("img#paper").click(function() {
    rps("Paper");
  });
});
