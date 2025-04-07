function togglePopup(action) {
    const popup = document.getElementById("popup-1");

    popup.classList.add('closing');
    popup.addEventListener('transitionend', function onTransitionEnd() {
        popup.classList.remove('active', 'closing');
        popup.style.display = "none";
        popup.removeEventListener('transitionend', onTransitionEnd);

        if (action === 'close') {
            window.location.href = "../../03_MENU/HTML/01_MENU PRINCIPAL.html";
        }
    }, { once: true });
}

window.onload = function () {
    const popup = document.getElementById("popup-1");
    const closeBtn = document.getElementById("close-btn");

    popup.style.display = "flex";

    let countdown = 10;
    closeBtn.style.pointerEvents = "none"; 
    closeBtn.style.opacity = "0.5"; 

    const interval = setInterval(() => {
        countdown--;
        closeBtn.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(interval);
            closeBtn.textContent = "×";
            closeBtn.style.pointerEvents = "auto"; 
            closeBtn.style.opacity = "1"; 
        }
    }, 1000);

    setTimeout(() => {
        popup.classList.add("active");
    }, 10);
};

function acessar() {
    window.open("../../03_MENU/HTML/01_MENU PRINCIPAL.html", "_blank");
    window.location.href = "../../01_HOME/FREELANCER/index.html";
}

