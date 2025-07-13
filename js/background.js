class background {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    this.numStars = 200;
    this.stars = [];
    this.animationId = null;

    this.resize = this.resize.bind(this);
    this.draw = this.draw.bind(this);

    window.addEventListener('resize', this.resize);
    this.resize();
    this.createStars();
    this.draw();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.createStars();
  }

  randomColor() {
    const colors = ['#ffffff', '#aaffff', '#ffaaff', '#ffffaa', '#aadfff'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  createStars() {
    this.stars = [];
    for (let i = 0; i < this.numStars; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const radiusX = Math.pow(Math.random(), 0.75) * this.canvas.width * 4;
      const radiusY = Math.pow(Math.random(), 0.75) * this.canvas.height * 4;
      this.stars.push({
        x: Math.cos(angle) * radiusX,
        y: Math.sin(angle) * radiusY,
        z: Math.random() * this.canvas.width,
        color: this.randomColor(),
      });
    }
  }

  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2;

    for (let star of this.stars) {
      star.z -= 2;

      if (star.z <= 0) {
        const angle = Math.random() * 2 * Math.PI;
        const radiusX = Math.pow(Math.random(), 0.75) * this.canvas.width * 4;
        const radiusY = Math.pow(Math.random(), 0.75) * this.canvas.height * 4;
        star.x = Math.cos(angle) * radiusX;
        star.y = Math.sin(angle) * radiusY;
        star.z = this.canvas.width;
        star.color = this.randomColor();
      }

      const k = 128 / star.z;
      const x = cx + star.x * k;
      const y = cy + star.y * k;

      if (x >= 0 && x < this.canvas.width && y >= 0 && y < this.canvas.height) {
        let size = (1 - star.z / this.canvas.width) * 2;
        size = Math.max(size, 0.1);
        this.ctx.beginPath();
        this.ctx.fillStyle = star.color;
        this.ctx.arc(x, y, size, 0, 2 * Math.PI);
        this.ctx.fill();
      }
    }

    this.animationId = requestAnimationFrame(this.draw);
  }
}

// Create the background instance globally so UI can access it
window.background = new background('background');