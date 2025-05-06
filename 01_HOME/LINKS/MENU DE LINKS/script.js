document.addEventListener('DOMContentLoaded', () => {
    const modeIcon = document.getElementById('mode_icon');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    document.body.classList.add('js-enabled');

    modeIcon.addEventListener('click', () => {
        const isDark = themeStylesheet.getAttribute('href').includes('ESCURO.css');

        if (isDark) {
            themeStylesheet.setAttribute('href', './CSS/CLARO.css');
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
        } 
        else {
            themeStylesheet.setAttribute('href', './CSS/ESCURO.css');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
        }
    });
});
