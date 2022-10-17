
// Dada uma matriz quadrada qualquer, retorne a soma das duas diagonais.
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 10],
];

let diagonalPrincipal = 0;
let diagonalSecundaria = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (i === j) {
      diagonalPrincipal += matriz[i][j];
    }
    if (i + j === matriz.length - 1) {
      diagonalSecundaria += matriz[i][j];
    }
  }
}

console.log('Top Left to Bottom Right: ', diagonalPrincipal);
console.log('Bottom left to Top Right', diagonalSecundaria);
