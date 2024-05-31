var wrapper = document.getElementsByClassName("text-animation")[0];
wrapper.style.opacity="1";
wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

var spans = wrapper.getElementsByTagName("span");

for(var i=0;i<spans.length;i++){
  spans[i].style.animationDelay = i*80+"ms";
}  