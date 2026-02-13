const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bird properties
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

// Create first pipe
pipes.push(createPipe());

function createPipe() {
  let topHeight = Math.random() * 300 + 50;
  return {
    x: canvas.width,
    top: topHeight,
    bottom: topHeight + pipeGap
  };
}

document.addEventListener("keydown", () => birdVelocity = jumpStrength);
document.addEventListener("click", () => birdVelocity = jumpStrength);

function update() {
  // Bird physics
  birdVelocity += gravity;
  birdY += birdVelocity;

  // Move pipes
  pipes.forEach(pipe => pipe.x -= pipeSpeed);

  // Add new pipes
  if (pipes[pipes.length - 1].x < canvas.width - 200) {
    pipes.push(createPipe());
  }

  // Remove off-screen pipes
  if (pipes[0].x < -pipeWidth) {
    pipes.shift();
  }

  draw();
  requestAnimationFrame(update);
}

update();

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw bird
  ctx.fillStyle = "yellow";
  ctx.fillRect(birdX, birdY, 30, 30);

  // Draw pipes
  ctx.fillStyle = "green";
  pipes.forEach(pipe => {
    // Top pipe
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);

    // Bottom pipe
    ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom);
  });
}

function checkCollision() {
  for (let pipe of pipes) {
    let hitPipe =
      birdX + 30 > pipe.x &&
      birdX < pipe.x + pipeWidth &&
      (birdY < pipe.top || birdY + 30 > pipe.bottom);

    let hitGround = birdY + 30 > canvas.height;

    if (hitPipe || hitGround) {
      alert("Game Over!");
      document.location.reload();
    }
  }
}

checkCollision();
