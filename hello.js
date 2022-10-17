// Considerando o intervalo de 1 → 100, imprima em tela Hello, World e Hello World para todos os números múltiplos de 3, 7 e simultaneamente de 3 e 7 respectivamente.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 7 === 0) console.log('Hello World');
  else if (i % 3 === 0) console.log('Hello');
  else if (i % 7 === 0) console.log('World');
  else console.log(i);
}