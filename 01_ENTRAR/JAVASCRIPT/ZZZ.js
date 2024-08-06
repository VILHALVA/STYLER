function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showSpinnerAndRedirect() {
    var loading = document.querySelector('div#loading');
    loading.style.display = 'block'; 

    await sleep(3000); 

    loading.style.display = 'none';
    window.location.href = '../../02_MENU/HTML/01_MENU PRINCIPAL.html';
}

window.onload = showSpinnerAndRedirect;
