const carrossel = document.getElementById("carrossel");
const btnEsquerda = document.getElementById("seta-esquerda");
const btnDireita = document.getElementById("seta-direita");

const scrollValor = 300; // distância a rolar por clique

btnDireita.addEventListener("click", () => {
  carrossel.scrollBy({ left: scrollValor, behavior: "smooth" });
});

btnEsquerda.addEventListener("click", () => {
  carrossel.scrollBy({ left: -scrollValor, behavior: "smooth" });
});
 
