const canvas = document.getElementById("canvas");
const canvasWidth = 400;
const canvasHeight = 400;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");
// ctx.fillStyle = "red";
// ctx.fillRect(0, 0, 50, 50);
// ctx.font = "50px Black";
// ctx.fillText("hello", 80, 80);

let snake = [];
let vX = 1;
let vY = 0;
let snakeX = 80;
let snakeY = 40;
let appleX = 60;
let appleY = 120;
let count = 5;
let startGame;
ctx.fillRect(snakeX, snakeY, 20, 20);

function resetGame() {
  alert("game over");
  count = 5;
}
function update() {
  snakeX += vX * 20;
  snakeY += vY * 20;
  if (snakeX > canvasWidth) {
    snakeX = 0;
  }
  if (snakeX < 0) {
    snakeX = canvasWidth;
  }
  if (snakeY > canvasHeight) {
    snakeY = 0;
  }
  if (snakeY < 0) {
    snakeY = canvasHeight;
  }
  snake.forEach((a) => {
    if (a.posX === snakeX && a.posY === snakeY) {
      resetGame();
    }

});
    snake.push({ posX: snakeX, posY: snakeY });
    
  if (appleX === snakeX && appleY === snakeY) {
    appleX = Math.floor(Math.random() * 20) * 20;
    appleY = Math.floor(Math.random() * 20) * 20;
    count++;
  }
  while (snake.length > count) {
    snake.shift();
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = "red";
    ctx.fillRect(appleX, appleY, 15, 15);
  snake.forEach((a) => {
    ctx.fillStyle = "yellow";
    ctx.fillRect(a.posX, a.posY, 15, 15);
  });
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(count - 5, 0, 30);
}
setInterval(update, 2000 / 15);
document.addEventListener("keydown", (e) => {
  if (!startGame) {
    startGame = setInterval(update, 1000 / 15);
  }
  switch (e.keyCode) {
    case 87:
      if (vY != 1) {
        vX = 0;
        vY = -1;
      }
      break;
    case 68:
      if (vX != -1) {
        vX = 1;
        vY = 0;
      }
      break;
    case 83:
      if (vY != -1) {
        vX = 0;
        vY = 1;
      }
      break;
    case 65:
      if (vX != 1) {
        vX = -1;
        vY = 0;
      }
      break;
  }
});
