// Alguns dados de um usuário
const fullname = 'Jonicleisson Junqueira Junior';
const username = 'junin';
const group = 'alunos';

// CRIANDO UM OBJETO A PARTIR DAS VARIAVEIS ACIMA
const user1 = {
    fullname: fullname,
    username: username,
    group: group
}
console.log(user1)

/*
    Quando o nome das propriedades do objeto é idêntico á da variável que lhe dará o valor, é possível usar a sintaxe 
    chamada PROPRIEDADE ABREVIADA, que permite não repetir os nomes das variávels á frente do nome das propriedades
*/

const user2 = {
    fullname,
    username,
    group
}

console.log(user2)

// Um objeto pode mesclar propriedades abreviadas e não abreviadas

const user3 = {
    fullname,
    username,
    password: 'TodoPoderosoTimao',
    group,
    lastlogin: '2025-08-14 18:47:23'
}

console.log(user3)

// DEPURANDO USANDOS PROPRIEDADES ABREVIADAS

const x = 10, y = 'batata'

/* 
    Exibindo o valor das duas variaveis com console.log()
    Oserve que os valores serão mostrados, mas a saida não informa quais as variáveis de onde provém os valores
*/

console.log(x,y)

/*
    Saida melhorada: passando um objeto formado pelas variáveis como propriedades abreviadas para o console.log()
    conseguimos identificar de onde vêm os valores
*/
console.log({x,y})