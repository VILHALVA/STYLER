let pretag = document.getElementById("d");

let tmr1 = undefined;
let tmr2 = undefined;
let A = 1;
let B = 1;

function init() {
  setInterval(asciiframe, 30);
}

let asciiframe = () => {
  const THETA = document.getElementById("theta").value;
  let thetaValue = document.getElementById("thetaValue");
  thetaValue.innerHTML = THETA;

  const PHI = document.getElementById("phi").value;
  let phiValue = document.getElementById("phiValue");
  phiValue.innerHTML = PHI;

  let b = [];
  let z = [];
  A += 0.07;
  B += 0.03;
  let cA = Math.cos(A),
    sA = Math.sin(A),
    cB = Math.cos(B),
    sB = Math.sin(B);

  for (let k = 0; k < 1760; k++) {
    b[k] = k % 80 == 79 ? "\n" : " ";
    z[k] = 0;
  }

  for (let j = 0; j < THETA; j += 0.07) {
    let ct = Math.cos(j),
      st = Math.sin(j);

    for (i = 0; i < PHI; i += 0.02) {
      let sp = Math.sin(i),
        cp = Math.cos(i),
        h = ct + 2, 
        D = 1 / (sp * h * sA + st * cA + 5), 
        t = sp * h * cA - st * sA; 

      let x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
        y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
        o = x + 80 * y,
        N = 0 | (8 * ((st * sA - sp * ct * cA) * cB - sp * ct * sA - st * cA - cp * ct * sB));
      if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
        z[o] = D;
        b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
      }
    }
  }
  pretag.innerHTML = b.join("");
};

init();
