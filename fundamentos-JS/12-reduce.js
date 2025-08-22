/*
    reduce() é um método de vetores que reduz o vetor a um único valor.
    Para isso, aplica uma função a cada elemtno do vetor, a qual
    efetua uma operação sobre o elemento e acumula o resultado a cada pessoa
*/

const numeros = [12, 19, 3, -4, 13, -11, 15, -1, 0]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']
const nums2 = [1, 2, 3, 4 , 5, 6]

/*
    Usando reduce() para somar todos os elemtnos do vetor numeros
    A função de callback do reduce() em sua forma mais simples, 
    possui dois parâmetros:
    1º ~> É o acumulador , que armazena o resultado das operações 
        sobre os elementos anteriores
    2º ~> Corresponde ao elemento que está sendo processado no 
        momento
*/

const soma = numeros.reduce((acum, el) => acum + el)
console.log('Soma de todos os elementos do vetor "Numeros": ', soma)

// reduce() para multriplicar os elementos de nums2
const produto = nums2.reduce((acum, el) => acum * el)
console.log('Produto de todos os elementos do vetor "nums2":', produto)

// Concatenando o vetor de frutas em uma única string, seperando
// os elementos por ';' e convertendo para maiíusculas
const stringFrutas = frutas.reduce((acum, el) => acum.toUpperCase() + '; ' + el.toUpperCase())
console.log(stringFrutas)

console.log('-'.repeat(80))

// Refazendo a soma do vetor numeros, mostrando os valores
// intermediários do acumulador
const soma2 = numeros.reduce((a,e) => {
    console.log(`Acumulador:${a}; Elemento:${e}`) 
    return a + e
})

// Refazendo a concatenação das frutas, mostrando os intermidiários
const stringFrutas2 = frutas.reduce((a,e) => {console.log(`Acumulador: "${a}"; elemento: "${e}"`)
    return a.toUpperCase() + '; ' + e.toUpperCase()
})
console.log(stringFrutas2)