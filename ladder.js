// Dado um número de degraus, imprima uma escada alinhada a direita utilizando o caractere #.
// Exemplo:
//      #
//     ##
//    ###
//   ####
//  #####

const degraus = 5;
let escada = '';

for (let i = 1; i <= degraus; i++) {
  escada = escada + '#';
  console.log(escada.padStart(degraus));
}