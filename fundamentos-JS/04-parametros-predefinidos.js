/*
    calcArea() é uma função que calcula a área de uma figura
    geometrica plana, dados a base, a altura e o tipo da forma
*/

function calcArea(base, altura, tipo = 'R'){
    switch(tipo){

        case 'R': // Retângulo
            return base * altura
        case 'T': // Triangulo
            return base * altura / 2
        case 'E': //Elipse/Circulo
            return (base /2 ) * (altura / 2) * Math.PI
        default: // Casos desconhecidos
            return undefined
    }
}

console.log(`Área do triângulo 10 x 30: ${calcArea(10,30,'T')}`)
console.log(`Área do elipse 7,5 x 7,5: ${calcArea(7.5,7.5,'E')}`)
console.log(`Área do retângulo 12,8 x 15,5: ${calcArea(12.8,15.5,'R')}`)
console.log(`Área do forma invalida 8 x 17: ${calcArea(8,17,'H')}`)

// Chamando a função com apenas dois parâmetros
console.log(`Área retângulo 20x40: ${calcArea(20,40)}`)

/*
    REGRAS PARA USO DE PARÂMETRS PREDEFINIDOS
    1) O parâmetro predefinido sempre deve vir por ULTIMO
    2) SEMPRE OS ULTIMOS
*/
