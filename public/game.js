// game.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
// Game properties
const boxSize = 50;
let boxX = (canvas.width - boxSize) / 2;
let boxY = (canvas.height - boxSize) / 2;
const moveSpeed = 5;

// Keyboard input handling
const keys = {};

window.addEventListener('keydown', (event) => {
  keys[event.key] = true;
});

window.addEventListener('keyup', (event) => {
  keys[event.key] = false;
});

// Game logic
function gameLogic() {
  // Update box position based on keyboard input
  if (keys['ArrowUp'] && boxY > 0) {
    boxY -= moveSpeed;
  }
  if (keys['ArrowDown'] && boxY < canvas.height - boxSize) {
    boxY += moveSpeed;
  }
  if (keys['ArrowLeft'] && boxX > 0) {
    boxX -= moveSpeed;
  }
  if (keys['ArrowRight'] && boxX < canvas.width - boxSize) {
    boxX += moveSpeed;
  }

  // Additional game logic can be added here
}

// Drawing function
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the box
  ctx.fillStyle = '#00F';
  ctx.fillRect(boxX, boxY, boxSize, boxSize);

  // Additional drawing code can be added here
}

// Game loop for drawing
function gameLoop() {
  draw();

  // Request the next frame
  requestAnimationFrame(gameLoop);
}

// Set up game logic to run at 100 ticks per second
const logicInterval = 10; // 1000ms / 100 ticks per second
setInterval(gameLogic, logicInterval);

// Start the game loop for drawing
requestAnimationFrame(gameLoop);
