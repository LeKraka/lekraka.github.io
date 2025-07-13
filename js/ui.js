document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-stars');

  toggleButton.addEventListener('click', () => {
    window.starfield.toggleStars();
    toggleButton.textContent = window.starfield.starsEnabled ? 'Turn Off Stars' : 'Turn On Stars';
  });
});
