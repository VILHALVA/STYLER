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

const emailId = document.getElementById("email-id");
const error = document.getElementById("error");
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

emailId.addEventListener("keyup", (e) => {
  console.log("Caret at: ", e.target.selectionStart);
});

emailId.addEventListener("input", (e) => {
  const emailInputValue = e.currentTarget.value;
  if (
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) !=
    true
  ) {
    emailId.style.outline = "2px dotted rgb(117, 152, 242)";
  } else {
    emailId.style.outline = "2px dotted rgb(118, 167, 63)";
  }
});

function checkEmpty() {
  if (emailId.value == "") {
    emailId.style.outline = "none";
  }
}

form.addEventListener("submit", (e) => {
  if (emailId.value.match(mailRegex)) {
    e.preventDefault();
    form.innerHTML = `<p style="font-size: 2rem; font-weight: 500; color: rgb(118, 167, 63);">Subscribed🎉</p>`;
    setTimeout("location.reload(true);", 2000);
  } 
  else {
    e.preventDefault();
    alert("Oops! Please check your email");
  }
});

let i = 0;
let placeholder = "";
const txt = "example@domain.com";
const speed = 150;

function type() {
  placeholder += txt.charAt(i);
  emailId.setAttribute("placeholder", placeholder);
  i++;
  setTimeout(type, speed);
}

type();

