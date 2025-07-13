document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-stars');

  // Keep the label static
  toggleButton.textContent = 'Toggle Stars';

  toggleButton.addEventListener('click', () => {
    // Toggle stars without changing button text
    starsEnabled = !starsEnabled;

    if (starsEnabled) {
      draw();
    } else {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
});
