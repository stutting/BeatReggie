// @codex:task Implement matrix-style falling code animation
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }, () => 1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, i * fontSize, y * fontSize);

    drops[i] = y * fontSize > canvas.height || Math.random() > 0.975 ? 0 : y + 1;
  });

  requestAnimationFrame(draw);
}
draw();
