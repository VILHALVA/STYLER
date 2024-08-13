function togglePopup(action) {
    const popup = document.getElementById("popup-1");

    popup.classList.add('closing');
    popup.addEventListener('transitionend', function onTransitionEnd() {
        popup.classList.remove('active', 'closing');
        popup.style.display = "none";
        popup.removeEventListener('transitionend', onTransitionEnd);

        if (action === 'close') {
            window.history.back();
        }
    }, { once: true });
}

window.onload = function() {
    const popup = document.getElementById("popup-1");
    popup.style.display = "flex";

    setTimeout(() => {
        popup.classList.add("active");
    }, 10);
};
