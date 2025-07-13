document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');

  let stars = [];
  const numStars = 300;
  let starsEnabled = true;
  let animationId;

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
      const radiusX = Math.pow(Math.random(), 0.75) * canvas.width * 4;
      const radiusY = Math.pow(Math.random(), 0.75) * canvas.height * 4;
      stars.push({
        x: Math.cos(angle) * radiusX,
        y: Math.sin(angle) * radiusY,
        z: Math.random() * canvas.width,
        color: randomColor(),
      });
    }
  }

  function draw() {
    if (!starsEnabled) return;

    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    for (let star of stars) {
      star.z -= 2;

      if (star.z <= 0) {
        const angle = Math.random() * 2 * Math.PI;
        const radiusX = Math.pow(Math.random(), 0.75) * canvas.width * 4;
        const radiusY = Math.pow(Math.random(), 0.75) * canvas.height * 4;
        star.x = Math.cos(angle) * radiusX;
        star.y = Math.sin(angle) * radiusY;
        star.z = canvas.width;
        star.color = randomColor();
      }

      const k = 128 / star.z;
      const x = cx + star.x * k;
      const y = cy + star.y * k;

      if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
        let size = (1 - star.z / canvas.width) * 2;
        size = Math.max(size, 0.1);
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    animationId = requestAnimationFrame(draw);
  }

  document.getElementById('toggle-stars').addEventListener('click', () => {
    starsEnabled = !starsEnabled;
    const btn = document.getElementById('toggle-stars');
    if (starsEnabled) {
      btn.textContent = "Turn Off Stars";
      draw();
    } else {
      btn.textContent = "Turn On Stars";
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  createStars();
  draw();
});
