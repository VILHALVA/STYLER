// ScrollReveal JS

ScrollReveal({ distance: "50px" });

ScrollReveal().reveal(".title", {
  delay: 200,
  easing: "ease-in",
  origin: "top",
  distance: "70px",
  duration: 900,
});

ScrollReveal().reveal(".description", {
  delay: 1000,
  easing: "ease-in",
  origin: "top",
  distance: "30px",
  duration: 1000,
});

ScrollReveal().reveal(".btn", {
  delay: 2000,
  easing: "ease-in-out",
  duration: 1000,
});

ScrollReveal().reveal(".card-container", {
  delay: 400,
  easing: "ease-in-out",
  origin: "right",
  distance: "800px",
  duration: 2500,
});

ScrollReveal().reveal(".gradient-line", {
  delay: 200,
  easing: "ease",
  origin: "left",
  distance: "1800px",
  duration: 3600,
});

ScrollReveal().reveal(".featured-title", {
  delay: 400,
  easing: "ease-in",
  origin: "right",
  distance: "200px",
  duration: 1400,
});

ScrollReveal().reveal(".item", {
  delay: 1200,
  interval: 200,
  origin: "bottom",
  easing: "ease-in-out",
  duration: 400,
});

// corbox

document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".item img");
  const corbox = document.querySelector(".corbox");
  const corboxImage = document.querySelector(".img-container img");
  const corboxTitle = document.querySelector(".img-header p");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const body = document.querySelector("body");

  let currentIndex;

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", function () {
      currentIndex = index;
      updatecorbox();
      corbox.style.display = "flex";
      body.classList.add("prevent-background-scroll");
    });
  });

  corbox.addEventListener("click", function (e) {
    if (e.target === corbox) {
      corbox.style.display = "none";
      body.classList.remove("prevent-background-scroll");
    }
  });

  prevBtn.addEventListener("click", function () {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updatecorbox();
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updatecorbox();
  });

  function updatecorbox() {
    const currentImage = galleryImages[currentIndex];
    corboxImage.src = currentImage.src;
    corboxTitle.textContent = currentImage.alt;
  }
});
