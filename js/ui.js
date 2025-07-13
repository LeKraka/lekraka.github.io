import Starfield from './starfield.js';

document.addEventListener('DOMContentLoaded', () => {
  const starfield = new Starfield('starfield');

  const toggleButton = document.getElementById('toggle-stars');
  toggleButton.addEventListener('click', () => {
    starfield.toggleStars();
    toggleButton.textContent = starfield.starsEnabled ? 'Turn Off Stars' : 'Turn On Stars';
  });

  // Add other UI event listeners here...
});
