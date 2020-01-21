const navergarIframe = document.querySelector('#HomeIframe');


navergarIframe.addEventListener('click', iframeHome);
navergarIframe.addEventListener('click', iframeWhatsapp);
navergarIframe.addEventListener('click', iframeSpotify);

function iframeHome() {
    document.all("HomeIframe").src = "../Home/index.html";
}

function iframeWhatsapp() {
    document.all("HomeIframe").src = "../WhatZapp/index.html";
}

function iframeSpotify() {
    document.all("HomeIframe").src = "../Zpotify/index.html";
}

function resizeIframe(idIframe) {
    var miIframe = document.getElementById(idIframe);
    var alturaPagina = miIframe.contentWindow.document.body.scrollHeight + 20;
    miIframe.style.height = alturaPagina;
}