// Dada uma matriz quadrada qualquer, retorne a soma de todos os valores contidos nas diagonais.
// Exemplo:
// 1 2 3
// 4 5 6
// 7 8 9
// A soma dos valores das diagonais é 1 + 5 + 9 + 3 + 5 + 7 = 25

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  soma += matriz[i][i];
  soma += matriz[i][matriz.length - 1 - i];
}

console.log(soma);