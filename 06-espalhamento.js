// Encontrando o maior e o menor número em uma série

let minimo = Math.min(2, -5, 4, 0, 11, -1);
let maximo = Math.max(2, -5, 4, 0, 11, -1);

console.log({minimo, maximo});

// E se a série de números estiver em um vetor
const nums = [2, -5, 4, 0 , 11, -1];

minimo = Math.min(nums);
maximo = Math.max(nums);

console.log(`Valores em vetor: ${{minimo, maximo}}`)