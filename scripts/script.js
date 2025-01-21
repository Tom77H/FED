document.querySelector('button').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    // Toggle the display of the nav
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});