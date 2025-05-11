document.addEventListener('DOMContentLoaded', () => {
    const modeIcon = document.getElementById('mode_icon');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    modeIcon.addEventListener('click', () => {
        const isDark = themeStylesheet.getAttribute('href').includes('escuro.css');

        if (isDark) {
            themeStylesheet.setAttribute('href', './css/claro.css');
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        } 
        else {
            themeStylesheet.setAttribute('href', './css/escuro.css');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        }
    });
});
