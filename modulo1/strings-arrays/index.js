// Ecercicios de interpretação de cógigo

/* a. retorna um array indefenido   / b. retorna um array nulo / c. retorna a quantidade de caracteres do array / d. retorna o primeiro array no caso numero 3/ 
e. retorna o numero 19 incluido no array  / retornou a soma de um array mais o numero 6 */


/* let array
console.log("a,", array)

array = null
console.log("b.", array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log("c. ", array.length)

let i = 0
console.log("d.", array[i])

array[i+1] = 19
console.log("e. ", array)

const valor = array[i+6]
console.log("f. ",valor)  */


// 2. resposta --  SUBI NUM ÔNIBUS EM MIRROCOS 


// Exercícios de escrita de código


//1.

let nomeUsuario = prompt("Digite seu Usuario de acesso:")
let email       = prompt("Digite seu email:")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeUsuario}`)

//2. 



//a.
let comidasPreferidas = ["lasanha", "pizza", "hamburguer", "hotdog", "pastel"]
console.log(comidasPreferidas)

//b.

console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

//c.
comidasPreferidas[1]= prompt("Qual a sua comida preferida?")
console.log(comidasPreferidas)



// 3.

let tarefas 
let tarefa1 = prompt("Digite sua primeira tarefa a ser realizada:")
let tarefa2 = prompt("Digite sua segunda tarefa a ser realizada:")
let tarefa3 = prompt("Digite sua terceira tarefa a ser realizada:")
tarefas = [tarefa1,tarefa2,tarefa3]
console.log(tarefas)
let indice = Number(prompt("Digite qual tarefa já foi realizada: 0,1 ou 2"))
tarefas.splice(indice,1)
console.log(indice,tarefas)


