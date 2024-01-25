const siteForm = document.getElementById("site-form");
    const siteUrlInput = document.getElementById("site-url");
    const siteIframe = document.getElementById("site-iframe");
    const iframeWarning = document.getElementById("iframe-warning");

    siteForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const siteUrl = siteUrlInput.value;

        const siteHostname = new URL(siteUrl).hostname;
        const blockedHostnames = ["example.com", "google.com"]; 
        if (blockedHostnames.includes(siteHostname)) {
            iframeWarning.textContent = "Este site não permite ser exibido em um iframe.";
            siteIframe.src = "";
            return;
        }

        siteIframe.src = siteUrl;
        iframeWarning.textContent = "";
    });

    siteForm.addEventListener("reset", function () {
        siteIframe.src = "";
        iframeWarning.textContent = "";
});