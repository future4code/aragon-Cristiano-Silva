// Exercícios de interpretação de códigos

// Exercicio1 = a. = false / b. = false / c.= true / d. = boolean
// Exercicio2 = o problema da é que está sendo concatenado e o resultado a soma não será executada de forma correta por esse motivo.
// Exercicio3 = A solução para esse problema sera mencionar o Number() para que se converta de string para números dessa forma a execução da operação será realizada.


// Exercicios de códigos - 


// Exercicio 01


let idadeUsuario = Number(prompt("Informe a sua idade"))
let idadeAmigo   = Number(prompt("Informe a idade de seu amigo(a):"))

console.log("Sua idade é maior do que a do seu melhor amigo?",idadeUsuario > idadeAmigo)
console.log("A diferença de idade entre nós é de ",idadeUsuario - idadeAmigo, "anos.")


// Exercicio 02

let numeroPar = Number(prompt(" Digite um numero Par:"))
console.log(numeroPar % 2)

// Após varias tentativas com numeros pares notei que todo o resultado dava zero.
// Após varias tentativas com numeros impares notei que todo o resultado dava um.



//Exercicio 03

let dadosUsuario = Number(prompt("Quantos anos você tem:"))
let meses = dadosUsuario *12
let dias = meses*31
let horas = dias*60
console.log("A sua idade em meses são:",meses,"meses.")
console.log("A sua idade em dias são", dias,"dias.")
console.log("A sua idade em horas são,",horas,"horas" )


//Exercicio 04

let numero01 = Number(prompt("Digite um numero:"))
let numero02 = Number(prompt("Digite outro numero:"))
let divisivel1 = Boolean(numero01 / numero02)
let divisivel2 = Boolean(numero02 / numero01)

console.log("O primeiro número é maior que o segundo?", numero01 > numero02)
console.log("O primeiro número é igual ao segundo?", numero01 == numero02)
console.log("O primeiro número é divisivel pelo segundo?", divisivel1)
console.log("O segundo número é divisivel pelo primeiro?",divisivel2)









