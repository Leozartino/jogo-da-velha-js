const X_CLASS = "x";
const CIRCULO_CLASS = "circulo";
const combinacoes_vencedores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const elementosQuadrados = document.querySelectorAll("[data-quadrado]");

let turnoCirculo;

(function startGame() {
  turnoCirculo = false;
  elementosQuadrados.forEach(quadrado => {
    quadrado.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
})();

function handleClick(e) {
  const quadrado = e.target;
  const classeAtual = turnoCirculo ? CIRCULO_CLASS : X_CLASS;
  porMarcador(quadrado, classeAtual);
  //Verificar o vencedor
  trocaTurnos();
  setBoardHoverClass();
}

function porMarcador(quadrado, classeAtual) {
  quadrado.classList.add(classeAtual);
}

function trocaTurnos() {
  turnoCirculo = !turnoCirculo;
}

function setBoardHoverClass() {
  board.classList.remove(CIRCULO_CLASS);
  board.classList.remove(X_CLASS);

  turnoCirculo
    ? board.classList.add(CIRCULO_CLASS)
    : board.classList.add(X_CLASS);
}
