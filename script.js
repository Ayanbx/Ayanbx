const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const statusEl = document.getElementById("status");

const WORLD = {
  width: canvas.width,
  height: canvas.height,
  gravity: 0.42,
  flapVelocity: -7,
  pipeWidth: 64,
  pipeGap: 150,
  pipeSpeed: 2.2,
  spawnEvery: 92,
  groundHeight: 80,
};

const bird = {
  x: 100,
  y: WORLD.height / 2,
  radius: 15,
  velocityY: 0,
};

let pipes = [];
let frame = 0;
let score = 0;
let best = Number(localStorage.getItem("flappy-best") || 0);
let started = false;
let gameOver = false;

bestEl.textContent = best.toString();

const resetGame = () => {
  bird.y = WORLD.height / 2;
  bird.velocityY = 0;
  pipes = [];
  frame = 0;
  score = 0;
  started = false;
  gameOver = false;
  scoreEl.textContent = "0";
  statusEl.textContent = "Press Space to Start";
};

const flap = () => {
  if (gameOver) return;
  started = true;
  bird.velocityY = WORLD.flapVelocity;
  statusEl.textContent = "";
};

const spawnPipe = () => {
  const minTop = 40;
  const maxTop = WORLD.height - WORLD.groundHeight - WORLD.pipeGap - 40;
  const topHeight = minTop + Math.random() * (maxTop - minTop);

  pipes.push({
    x: WORLD.width,
    topHeight,
    counted: false,
  });
};

const update = () => {
  if (!started || gameOver) return;

  frame += 1;

  bird.velocityY += WORLD.gravity;
  bird.y += bird.velocityY;

  if (frame % WORLD.spawnEvery === 0) {
    spawnPipe();
  }

  for (const pipe of pipes) {
    pipe.x -= WORLD.pipeSpeed;

    if (!pipe.counted && pipe.x + WORLD.pipeWidth < bird.x) {
      pipe.counted = true;
      score += 1;
      scoreEl.textContent = score.toString();
      if (score > best) {
        best = score;
        localStorage.setItem("flappy-best", best.toString());
        bestEl.textContent = best.toString();
      }
    }

    const inPipeX = bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + WORLD.pipeWidth;
    const hitsTop = bird.y - bird.radius < pipe.topHeight;
    const hitsBottom = bird.y + bird.radius > pipe.topHeight + WORLD.pipeGap;

    if (inPipeX && (hitsTop || hitsBottom)) {
      gameOver = true;
    }
  }

  pipes = pipes.filter((pipe) => pipe.x + WORLD.pipeWidth > 0);

  const groundY = WORLD.height - WORLD.groundHeight;
  if (bird.y + bird.radius >= groundY || bird.y - bird.radius <= 0) {
    gameOver = true;
  }

  if (gameOver) {
    statusEl.textContent = "Game Over — Press R to Restart";
  }
};

const drawBackground = () => {
  const gradient = ctx.createLinearGradient(0, 0, 0, WORLD.height);
  gradient.addColorStop(0, "#75d9ff");
  gradient.addColorStop(1, "#d6f5ff");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WORLD.width, WORLD.height);

  ctx.fillStyle = "#e7f9ff";
  ctx.beginPath();
  ctx.arc(330, 95, 36, 0, Math.PI * 2);
  ctx.fill();
};

const drawPipes = () => {
  ctx.fillStyle = "#1fa333";

  for (const pipe of pipes) {
    ctx.fillRect(pipe.x, 0, WORLD.pipeWidth, pipe.topHeight);
    ctx.fillRect(
      pipe.x,
      pipe.topHeight + WORLD.pipeGap,
      WORLD.pipeWidth,
      WORLD.height - WORLD.pipeGap - pipe.topHeight - WORLD.groundHeight,
    );

    ctx.fillStyle = "#15832a";
    ctx.fillRect(pipe.x - 5, pipe.topHeight - 12, WORLD.pipeWidth + 10, 12);
    ctx.fillRect(pipe.x - 5, pipe.topHeight + WORLD.pipeGap, WORLD.pipeWidth + 10, 12);
    ctx.fillStyle = "#1fa333";
  }
};

const drawGround = () => {
  ctx.fillStyle = "#d1ab50";
  ctx.fillRect(0, WORLD.height - WORLD.groundHeight, WORLD.width, WORLD.groundHeight);

  ctx.fillStyle = "#b6903a";
  for (let i = 0; i < WORLD.width; i += 24) {
    ctx.fillRect(i, WORLD.height - WORLD.groundHeight + 8, 12, 6);
  }
};

const drawBird = () => {
  ctx.save();
  ctx.translate(bird.x, bird.y);
  const angle = Math.max(-0.55, Math.min(0.85, bird.velocityY / 10));
  ctx.rotate(angle);

  ctx.fillStyle = "#ffd93b";
  ctx.beginPath();
  ctx.arc(0, 0, bird.radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ff9f1c";
  ctx.beginPath();
  ctx.moveTo(14, -2);
  ctx.lineTo(28, 3);
  ctx.lineTo(14, 8);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(4, -6, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.arc(6, -6, 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
};

const drawOverlay = () => {
  if (!started && !gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
    ctx.fillRect(0, 0, WORLD.width, WORLD.height);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 36px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Flappy Bird", WORLD.width / 2, WORLD.height / 2 - 14);
    ctx.font = "20px Inter, sans-serif";
    ctx.fillText("Press Space", WORLD.width / 2, WORLD.height / 2 + 24);
  }

  if (gameOver) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, WORLD.width, WORLD.height);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 34px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", WORLD.width / 2, WORLD.height / 2 - 10);
    ctx.font = "20px Inter, sans-serif";
    ctx.fillText(`Score: ${score}`, WORLD.width / 2, WORLD.height / 2 + 25);
    ctx.fillText("Press R to restart", WORLD.width / 2, WORLD.height / 2 + 58);
  }
};

const render = () => {
  drawBackground();
  drawPipes();
  drawGround();
  drawBird();
  drawOverlay();
};

const gameLoop = () => {
  update();
  render();
  requestAnimationFrame(gameLoop);
};

const handleFlapInput = (event) => {
  if (event.type === "keydown") {
    if (!["Space", "ArrowUp"].includes(event.code)) return;
    event.preventDefault();
  }

  if (!gameOver) flap();
};

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyR") {
    resetGame();
    return;
  }

  handleFlapInput(event);
});

canvas.addEventListener("pointerdown", () => {
  if (gameOver) return;
  flap();
});

resetGame();
gameLoop();
