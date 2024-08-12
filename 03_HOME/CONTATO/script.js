function togglePopup() {
    const popup = document.getElementById("popup-1");
    const closeButton = document.querySelector('.close-btn');

    closeButton.classList.add('clicked');

    setTimeout(() => {
        popup.classList.remove("active");
        setTimeout(() => {
            window.history.back();
        }, 300); 
    }, 300);
}

window.onload = function() {
    const popup = document.getElementById("popup-1");
    popup.style.display = "flex";

    setTimeout(() => {
        popup.classList.add("active");
    }, 10);
};
