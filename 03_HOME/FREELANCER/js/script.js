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
  const url = 'https://wa.me/5568992561977/?text=Olá!%20Eu%20Quero%20Contratar%20Seu%20Serviço%20De%20Freelancer!'; 
  window.open(url, '_blank'); 
});


