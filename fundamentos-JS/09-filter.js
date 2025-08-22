/*
    O método de vetores filter() cria um NOVO VETOR contendo 
    apenas os elementos que atendam ao critério apresentando 
    pela função passada como parâmetro
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva',
    'jabuticaba', 'maracujá']

// Cria um novo vetor apenas com os números negativos
console.log('Apenas os números negativos', numeros.filter(n => n < 0))

// Cria um novo vetor apenas com os números pares
console.log('Apenas números pares: ', numeros.filter(n => n % 2 === 0))

// Cria um novo vetor apenas com números maiores que 20
console.log('Apenas números > que 20: ', numeros.filter(n => n > 20))

// Novo vetor apenas com as frutas que começam com 'm'
console.log('Frutas que começam com "m":', frutas.filter(f => f.charAt(0) === "m"))

// Novo vetor apenas com as frutas que terminam com 'r'
console.log('Frutas que terminam com "r":', frutas.filter(f=> f.slice(-1) == 'r'))