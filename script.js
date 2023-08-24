var userWon = 0;
var pcWon = 0;
var gameDraw = 0;
var totalGames = 0;
var winRate = 0;
var gameMode = "";
var userName = "";

//generate the output messages
var outputMsg = function (
  gameOutcome,
  pcHandSign,
  playerHandSign,
  pcHandSignIcon,
  playerHandSignIcon
) {
  //define the messages
  var replayMsg = 'Type "scissors" "paper" or "stone" to play another round~';
  var winningMsg = `Congrats ${userName}! <br> You played ${playerHandSign} ${playerHandSignIcon} <br> PC played ${pcHandSign} ${pcHandSignIcon} <br> <br> You won! ${replayMsg} <br> <br> <br> Scoreboard: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}% of the time`;
  var losingMsg = `Awww ${userName}... <br> You played ${playerHandSign} ${playerHandSignIcon} <br> PC played ${pcHandSign} ${pcHandSignIcon} <br> <br> You lost! ${replayMsg} <br> <br> <br> Scoreboard: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}% of the time`;
  var drawMsg = `Still got chance ${userName}~ <br> You played ${playerHandSign} ${playerHandSignIcon} <br> PC played ${pcHandSign} ${pcHandSignIcon} <br> <br> It's a draw! ${replayMsg} <br> <br> <br> Scoreboard: <br> You won: ${userWon} <br> PC won: ${pcWon} <br> You win ${winRate}% of the time`;

  if (gameOutcome == "win") {
    return winningMsg;
  } else if (gameOutcome == "draw") {
    return drawMsg;
  } else if (gameOutcome == "lose") {
    return losingMsg;
  }
};

//normal game mechanics function
var playNormalGame = function (pcHandSign, playerHandSign) {
  var gameOutcome = "";
  if (pcHandSign == playerHandSign) {
    gameDraw = gameDraw + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "draw";
    return gameOutcome;
  } else if (pcHandSign == "scissors" && playerHandSign !== "stone") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "lose";
    return gameOutcome;
  } else if (pcHandSign == "paper" && playerHandSign !== "scissors") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "lose";
    return gameOutcome;
  } else if (pcHandSign == "stone" && playerHandSign !== "paper") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "lose";
    return gameOutcome;
  } else userWon = userWon + 1;
  totalGames = totalGames + 1;
  winRate = (userWon / totalGames) * 100;
  gameOutcome = "win";
  return gameOutcome;
};

//reverse game mechanics function
var playReverseGame = function (pcHandSign, playerHandSign) {
  var gameOutcome = "";
  if (pcHandSign == playerHandSign) {
    gameDraw = gameDraw + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "draw";
    return gameOutcome;
  } else if (pcHandSign == "scissors" && playerHandSign !== "paper") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "lose";
    return gameOutcome;
  } else if (pcHandSign == "paper" && playerHandSign !== "stone") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "lose";
    return gameOutcome;
  } else if (pcHandSign == "stone" && playerHandSign !== "scissors") {
    pcWon = pcWon + 1;
    totalGames = totalGames + 1;
    winRate = (userWon / totalGames) * 100;
    gameOutcome = "lose";
    return gameOutcome;
  } else userWon = userWon + 1;
  totalGames = totalGames + 1;
  winRate = (userWon / totalGames) * 100;
  gameOutcome = "win";
  return gameOutcome;
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
  var handSign = "";
  if (randomNum == 1) {
    handSign = "scissors";
  } else if (randomNum == 2) {
    handSign = "paper";
  } else if (randomNum == 3) {
    handSign = "stone";
  }
  return handSign;
};

//random number generator
var generateRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};
var main = function (input) {
  //enter your name
  if (userName == "" && input !== "") {
    userName = input;
    return `Welcome ${userName}! Please enter "normal" or "reverse" to select game mode!`;
  } else if (userName == "" && input == "") {
    return `Please enter your name`;
  }

  //select game mode
  if (gameMode == "" && (input == "normal" || input == "reverse")) {
    gameMode = input;
    return `Hi ${userName}, you have chose to play the ${gameMode} game. Input "scissors", "paper" or "stone" to begin!`;
  } else if (gameMode == "normal" || gameMode == "reverse") {
    //validate input to be scissors paper or stone
    if (input !== "scissors" && input !== "paper" && input !== "stone") {
      return `Please enter "scissors", "paper" or "stone".`;
    }

    //generate pc handsign
    var pcHandSign = assignNum();
    var pcHandSignIcon = getIcon(pcHandSign);

    //input = player handsign
    var playerHandSign = input;
    var playerHandSignIcon = getIcon(playerHandSign);

    //start NORMAL game play mechanics
    if (gameMode == "normal") {
      var gamePlayStart = playNormalGame(
        pcHandSign,
        playerHandSign,
        pcHandSignIcon,
        playerHandSignIcon
      );
    } else if (gameMode == "reverse") {
      var gamePlayStart = playReverseGame(
        pcHandSign,
        playerHandSign,
        pcHandSignIcon,
        playerHandSignIcon
      );
    }

    //get the result msg by parsing the win lose draw
    var showFinalMsg = outputMsg(
      gamePlayStart,
      pcHandSign,
      playerHandSign,
      pcHandSignIcon,
      playerHandSignIcon
    );

    return showFinalMsg;

    //if did not enter normal or reverse
  } else return `Please enter either "normal" or "reverse"!`;
};
