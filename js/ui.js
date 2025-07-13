document.addEventListener('DOMContentLoaded', () => {
    fetch('last-updated.txt')
        .then(res => res.text())
        .then(date => {
            document.getElementById('last-updated-date').textContent = date.trim();
        });
});
