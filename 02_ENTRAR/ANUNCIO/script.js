function togglePopup(action) {
    const popup = document.getElementById("popup-1");

    popup.classList.add('closing');
    popup.addEventListener('transitionend', function onTransitionEnd() {
        popup.classList.remove('active', 'closing');
        popup.style.display = "none";
        popup.removeEventListener('transitionend', onTransitionEnd);

        if (action === 'close') {
            window.location.href = "../ENTRADA.html";
        }
    }, { once: true });
}

window.onload = function () {
    const popup = document.getElementById("popup-1");
    const closeBtn = document.getElementById("close-btn");

    popup.style.display = "flex";

    let countdown = 30;
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
    window.open("../../01_HOME/FREELANCER/index.html", "_blank");
    setTimeout(() => {
        window.location.href = "../ENTRADA.html";
    }, 100);
}

document.querySelector(".content").addEventListener("click", function (event) {
    const isCloseBtn = event.target.closest(".close-btn");

    if (!isCloseBtn) {
        acessar();
    }
});


