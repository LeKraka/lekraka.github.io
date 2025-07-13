document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-stars');

    toggleButton.addEventListener('click', () => {
    window.starfield.toggleStars();
    });
    fetch('last-updated.txt')
        .then(res => res.text())
        .then(date => {
            document.getElementById('last-updated-date').textContent = date.trim();
        });

});
