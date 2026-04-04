document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const mainCSS = document.getElementById('themeStylesheet');
    const lbCSS = document.getElementById('lightboxStylesheet');

    let isDark = true;

    toggle.addEventListener('click', () => {
        isDark = !isDark;

        if (isDark) {
            mainCSS.href = '/css/styles.css';
            lbCSS.href = '/css/lightbox.css';
            icon.className = 'fa-solid fa-moon';
        } else {
            mainCSS.href = '/css/styles-light.css';
            lbCSS.href = '/css/lightbox-light.css';
            icon.className = 'fa-solid fa-sun';
        }
    });
});