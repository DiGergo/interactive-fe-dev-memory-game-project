/* global localStorage */

let player;
let start = document.querySelector("#start");
let moves = document.querySelector("#moves");
let highScore = document.querySelector("#highscore");
let lifes = document.querySelector("#lifes-left");
let lifesLeft;
let order = [];
let playerOrder = [];
let flash; //lifes
let turn;
let good;
let compTurn;
let intervalId;
let thisGameResult;
let noise = true;
let on = false;
let win;

const redField = document.querySelector("#red-field");
const blueField = document.querySelector("#blue-field");
const yellowField = document.querySelector("#yellow-field");
const greenField = document.querySelector("#green-field");

//---------------------------------------------------------------MODAL 

let modal = document.getElementById("myModal");
let btn = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//------------------------------------------Asking for player name, trigerred by New Game button

const playerPrompt = () => {
  let txt;
  player = prompt("Please enter your name: ", "");
  txt = "Good luck " + player + " !";
  document.getElementById("player-name").innerHTML = txt;
};

//-------------- Sets moves and lifes then play's the game

start.addEventListener('click', (event) => {
  lifes.innerHTML = "3";
  moves.innerHTML = "1";
  play();
});

/* -------------------------------Play function checks if the player played allready or not with the local storage and assigns the previous score if he did.
generates the array for the game logic, sets the function execution duration.*/

const play = () => {
  highScore.innerHTML = localStorage.getItem(player) == null ? "Your best score is : " + 0 : "Your best score is : " + localStorage.getItem(player);
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  lifesLeft = 3;
  good = true;

  for (var i = 0; i < 50; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
  intervalId = setInterval(gameTurn, 700);
};

/* ------------Game functions  */

function gameTurn() {
  on = false;
  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 100);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("sound1");
    audio.play();
  }
  noise = true;
  redField.style.backgroundColor = "red";
}

function two() {
  if (noise) {
    let audio = document.getElementById("sound2");
    audio.play();
  }
  noise = true;
  blueField.style.backgroundColor = "blue";
}

function three() {
  if (noise) {
    let audio = document.getElementById("sound3");
    audio.play();
  }
  noise = true;
  yellowField.style.backgroundColor = "#e8ff99";
}

function four() {
  if (noise) {
    let audio = document.getElementById("sound4");
    audio.play();
  }
  noise = true;
  greenField.style.backgroundColor = "#6aff4c";
}

function clearColor() {
  redField.style.backgroundColor = "#A70000";
  blueField.style.backgroundColor = "#313A89";
  yellowField.style.backgroundColor = "#d3be1d";
  greenField.style.backgroundColor = "#008E06";
}

function flashColor() {
  redField.style.backgroundColor = "red";
  blueField.style.backgroundColor = "blue";
  yellowField.style.backgroundColor = "#e8ff99";
  greenField.style.backgroundColor = "#6aff4c";
}

redField.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

blueField.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

yellowField.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

greenField.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 200);
    }
  }
});

function check() {

  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    on = false;
    flashColor();
    lifesLeft--;
    lifes.innerHTML = lifesLeft;
    setTimeout(() => {
      if (lifesLeft === 0) {
        gameOver();
        restart();
      }
      else {
        clearColor();
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 700);
      }
    }, 700);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    moves.innerHTML = turn;
    intervalId = setInterval(gameTurn, 700);
  }

}

function winGame() {
  flashColor();
  on = false;
  win = true;
  document.getElementById("player-name").innerHTML = "You Won  " + player + "!!!";
  highScore.innerHTML = "Congratulations!!!";
}

function gameOver() {
  thisGameResult = localStorage.getItem(player);
  thisGameResult = Number(thisGameResult);
  if (turn > thisGameResult || localStorage.getItem(player) == null) {
    localStorage.setItem(player, turn);
  }
  if (lifesLeft === 0) {
    flashColor();
    on = false;
    win = false;
    clearInterval();
    highScore.innerHTML = "Your best score is: " + localStorage.getItem(player);
    document.getElementById("player-name").innerHTML = "You Lost! Press new game or replay.";
    }
}


function restart() {
  let restartGame = document.getElementById("restart");
  restartGame.style.display = "inline-table";
  restartGame.addEventListener("click", (event) => {
    clearInterval(intervalId);
    play();
    lifes.innerHTML = "3";
    moves.innerHTML = "1";
    turn = 1;
  });
}
