const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
const numStars = 300;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
}
window.addEventListener('resize', resize);
resize();

function randomColor() {
  const colors = ['#ffffff', '#aaffff', '#ffaaff', '#ffffaa', '#aadfff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createStars() {
  stars = [];
  for (let i = 0; i < numStars; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const radiusX = Math.sqrt(Math.random()) * canvas.width * 2;
    const radiusY = Math.sqrt(Math.random()) * canvas.height * 2;
    stars.push({
      x: Math.cos(angle) * radiusX,
      y: Math.sin(angle) * radiusY,
      z: Math.random() * canvas.width,
      color: randomColor(),
    });
  }
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  for (let star of stars) {
    if (star.z <= 0) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.sqrt(Math.random()) * canvas.width * 2;
      star.x = Math.cos(angle) * radius;
      star.y = Math.sin(angle) * radius;
      star.z = canvas.width;
      star.color = randomColor();
    }
      let size = (1 - star.z / canvas.width) * 2;
      size = Math.max(size, 0.1); // Clamp size to a minimum of 0.1
      ctx.beginPath();
      ctx.fillStyle = star.color;
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();

    if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
      const size = (1 - star.z / canvas.width) * 2;
      ctx.beginPath();
      ctx.fillStyle = star.color;
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  requestAnimationFrame(draw);
}

createStars();
draw();
