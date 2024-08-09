function relogio() {
    var horas = document.getElementById('hora');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
  }
  var interval = setInterval(relogio,1000);