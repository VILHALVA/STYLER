const dataNascimentoStr = "10/06/1996"; 
function calcularIdade(dataNascimentoStr) {
  const [dia, mes, ano] = dataNascimentoStr.split("/").map(Number);
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const dataAniversarioEsteAno = new Date(anoAtual, mes - 1, dia); 

  let idade = anoAtual - ano;
  if (hoje < dataAniversarioEsteAno) {
    idade -= 1;
  }

  return idade;
}

document.addEventListener("DOMContentLoaded", () => {
  const idade = calcularIdade(dataNascimentoStr);
  document.getElementById("idade").textContent = idade;
});