const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// Matrix-style character set: Katakana + symbols
const matrixChars = 'アカサタナハマヤラワ0123456789@#$%&*';

function draw() {
  // Fade old characters to create trail
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00FF00'; // Bright Matrix green
  ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

  drops.forEach((y, i) => {
    const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);

    if (y * fontSize > canvas.height || Math.random() > 0.975) {
      drops[i] = 0;
    } else {
      drops[i]++;
    }
  });

  requestAnimationFrame(draw);
}
draw();
