const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bird
let birdX = 50;
let birdY = 300;
let birdVelocity = 0;
let gravity = 0.5;
let jumpStrength = -8;

// Pipes
let pipes = [];
let pipeWidth = 60;
let pipeGap = 150;
let pipeSpeed = 2;
let score = 0;
// Game state
let gameOver = false;

// Create first pipe
pipes.push(createPipe());

function createPipe() {
  let topHeight = Math.random() * 300 + 50;
  return {
    x: canvas.width,
    top: topHeight,
    bottom: topHeight + pipeGap,
    passed: false
  };
}

// Input
document.addEventListener("keydown", () => {
  if (!gameOver) birdVelocity = jumpStrength;
});
document.addEventListener("click", () => {
  if (!gameOver) birdVelocity = jumpStrength;
});

// Game loop
function update() {
  if (gameOver) return;

  // Bird physics
  birdVelocity += gravity;
  birdY += birdVelocity;

  // Move pipes
    pipes.forEach(pipe => pipe.x -= pipeSpeed);
        pipes.forEach(pipe => {
        pipe.x -= pipeSpeed;

        // Count score when bird passes pipe
        if (!pipe.passed && pipe.x + pipeWidth < birdX) {
            pipe.passed = true;
            score++;
        }
    });

  // Add new pipes
  if (pipes[pipes.length - 1].x < canvas.width - 200) {
    pipes.push(createPipe());
  }

  // Remove old pipes
  if (pipes[0].x < -pipeWidth) {
    pipes.shift();
  }

  checkCollision();
  draw();

  requestAnimationFrame(update);
}

update();

// Drawing
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Bird
    ctx.fillStyle = "yellow";
    ctx.fillRect(birdX, birdY, 30, 30);

    // Pipes
    ctx.fillStyle = "pink";
    pipes.forEach(pipe => {
    // Top pipe
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);

    // Bottom pipe
    ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom);

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 40);

  });
}

// Collision detection
function checkCollision() {
  for (let pipe of pipes) {
    let hitPipe =
      birdX + 30 > pipe.x &&
      birdX < pipe.x + pipeWidth &&
      (birdY < pipe.top || birdY + 30 > pipe.bottom);

    let hitGround = birdY + 30 > canvas.height;

    if (hitPipe || hitGround) {
      endGame();
    }
  }
}

// End game without freezing the page
function endGame() {
  gameOver = true;
  document.getElementById("gameOverMessage").style.display = "block";
}

document.getElementById("restartButton").addEventListener("click", restartGame);

function restartGame() {
    // Hide the message again
    document.getElementById("gameOverMessage").style.display = "none";

    // Reset game state
    birdX = 50;
    birdY = 300;
    birdVelocity = 0;

    pipes = [];
    pipes.push(createPipe());

    score = 0;

    gameOver = false;

    // Restart the loop
    update();
}

