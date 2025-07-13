document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-stars');

  toggleButton.addEventListener('click', () => {
    window.starfield.toggleStars();
    });
});
