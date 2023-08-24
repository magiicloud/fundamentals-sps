var userWon = 0;
var pcWon = 0;
var gameDraw = 0;
var totalGames = 0;
var winRate = 0;

var main = function (input) {
  //generate pc handsign
  var pcHandSign = assignNum();
  var pcHandSignIcon = getIcon(pcHandSign);
  console.log("pc handsign");
  console.log(pcHandSign);
  console.log(pcHandSignIcon);

  //input = player handsign
  var playerHandSign = input;
  var playerHandSignIcon = getIcon(playerHandSign);
  console.log("player handsign");
  console.log(playerHandSign);
  console.log(playerHandSignIcon);

  //define the messages
  var replayMsg = 'Type "scissors" "paper" or "stone" to play another round~';
  var winningMsg = `You played ${playerHandSign} ${playerHandSignIcon} <br> PC played ${pcHandSign} ${pcHandSignIcon} <br> <br> You won! <br> <br> <br> ${replayMsg}`;
  var losingMsg = `You played ${playerHandSign} ${playerHandSignIcon} <br> PC played ${pcHandSign} ${pcHandSignIcon} <br> <br> You lost! <br> <br> <br> ${replayMsg}`;
  var drawMsg = `You played ${playerHandSign} ${playerHandSignIcon} <br> PC played ${pcHandSign} ${pcHandSignIcon} <br> <br> It's a draw! <br> <br> <br> ${replayMsg}`;

  //conditions of the game
  if (pcHandSign == playerHandSign) {
    gameDraw = gameDraw + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    console.log("user win");
    console.log(userWon);
    console.log("pc win");
    console.log(pcWon);
    console.log("draw");
    console.log(gameDraw);
    console.log("total games");
    console.log(totalGames);
    return `${drawMsg} <br> <br> <br> Stats: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}%`;
  } else if (pcHandSign == "scissors" && playerHandSign !== "stone") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    console.log("user win");
    console.log(userWon);
    console.log("pc win");
    console.log(pcWon);
    console.log("draw");
    console.log(gameDraw);
    console.log("total games");
    console.log(totalGames);
    return `${losingMsg} <br> <br> <br> Stats: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}%`;
  } else if (pcHandSign == "paper" && playerHandSign !== "scissors") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    console.log("user win");
    console.log(userWon);
    console.log("pc win");
    console.log(pcWon);
    console.log("draw");
    console.log(gameDraw);
    console.log("total games");
    console.log(totalGames);
    return `${losingMsg} <br> <br> <br> Stats: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}%`;
  } else if (pcHandSign == "stone" && playerHandSign !== "paper") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    console.log("user win");
    console.log(userWon);
    console.log("pc win");
    console.log(pcWon);
    console.log("draw");
    console.log(gameDraw);
    console.log("total games");
    console.log(totalGames);
    return `${losingMsg} <br> <br> <br> Stats: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}%`;
  } else userWon = userWon + 1;
  totalGames = totalGames + 1;
  winRate = (userWon / totalGames) * 100;
  console.log("user win");
  console.log(userWon);
  console.log("pc win");
  console.log(pcWon);
  console.log("draw");
  console.log(gameDraw);
  console.log("total games");
  console.log(totalGames);
  return `${winningMsg} <br> <br> <br> Stats: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}%`;
};

//generate icon as per scissors paper or stone
var getIcon = function (inputHandSign) {
  if (inputHandSign == "scissors") {
    return "✂️";
  } else if (inputHandSign == "paper") {
    return "🗒";
  } else if (inputHandSign == "stone") {
    return "🪨";
  } else return "nothing";
};

//assign 123 to scissors paper and stone respectively
var assignNum = function () {
  var randomNum = generateRandomNum();

  if (randomNum == 1) {
    handSign = "scissors";
  } else if (randomNum == 2) {
    handSign = "paper";
  } else if (randomNum == 3) {
    handSign = "stone";
  }
  console.log("PC handsign is");
  console.log(handSign);
  return handSign;
};

//random number generator
var generateRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  console.log("random number");
  console.log(randomInteger);
  return randomInteger;
};
