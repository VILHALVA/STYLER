function detectDevTools() {
    const threshold = 160; 
    let devtoolsOpen = false;

    setInterval(() => {
        if (
            window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold
        ) {
            devtoolsOpen = true;
        } 
        else {
            devtoolsOpen = false;
        }

        const start = performance.now();
        debugger;
        if (performance.now() - start > 100) {
            devtoolsOpen = true;
        }

        if (devtoolsOpen) {
            alert("😡DETECTAMOS O USO DE FERRAMENTAS DE DESENVOLVEDOR! VOCÊ SERÁ REDIRECIONADO PARA A PÁGINA INICIAL!");
            window.location.href = "https://vilhalva.github.io/STYLER/index.html";
        }
    }, 1000); 
}

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
        (e.ctrlKey && e.key === "U")) {
        e.preventDefault();
    }
};

detectDevTools();

