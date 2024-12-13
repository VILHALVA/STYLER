var slider = tns({
  container: ".slider",
  items: 3,
  mouseDrag: true,
  autoplay: false,
  center: true,
  loop: false,
  nav: false,
  controlsContainer: "#custom-control",
  controlsPosition: "bottom",
});

ScrollReveal({ distance: "30px", delay: 400 });

ScrollReveal().reveal(".title", {
  delay: 300,
  interval: 300,
  easing: "ease-in",
  origin: "top",
});

ScrollReveal().reveal(".paragraph", {
  delay: 500,
  interval: 300,
  easing: "ease-in",
  origin: "top",
});

ScrollReveal().reveal("#form", {
  delay: 300,
  interval: 300,
  easing: "ease-in",
  origin: "bottom",
});

const contatoButton = document.querySelector('button[aria-label="submit"]');

contatoButton.addEventListener('click', () => {
  const url = 'https://t.me/VILHALVA100'; 
  window.open(url, '_blank'); 
});


