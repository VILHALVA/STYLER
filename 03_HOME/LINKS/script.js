function togglePopup(action) {
    const popup = document.getElementById("popup-1");
    popup.classList.add('closing');

    setTimeout(() => {
        popup.classList.remove("active");
        popup.style.display = "none";

        if (action === 'close') {
            window.history.back();
        } 
        else if (action === 'sim') {
            window.location.href = './MENU DE LINKS/index.html';
        }
    }, 300); 
}

window.onload = function() {
    const popup = document.getElementById("popup-1");
    popup.style.display = "flex";

    setTimeout(() => {
        popup.classList.add("active");
    }, 10);
};
