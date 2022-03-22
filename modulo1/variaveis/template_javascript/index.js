

// Exercicio1 
let primeiroNome
let idade
console.log(typeof primeiroNome)
console.log(typeof idade)

// retornou undefined porque a variável já está definida mas nenhum valor foi atribuido.

primeiroNome =prompt("Qual é o seu nome:")
idade = prompt("Informe a sua idade:")
console.log(typeof primeiroNome)
console.log(typeof idade)

//agora com o valor atribuido a variável o console retornou a tipo definido - STRING

console.log("Olá, meu nome é,",primeiroNome,"tenho ",idade,"anos.")

// Exercicio2 

let nascidoUf = prompt("Você nasceu no estado de Pernambuco?")
let sobreNome = prompt("Seu sobrenome é Souza?")
let temFilhos = prompt("Você tem 2 filhos?")
let respostaUm    = ("SIM")
let respostaDois  = ("NÃO")
let respostaTRES  = ("SIM")
console.log("Você nasceu no estado de Pernambuco?",nascidoUf)
console.log("Seu sobrenome é Souza?",sobreNome)
console.log("Você tem 2 filhos?",temFilhos)
console.log(respostaUm)
console.log(respostaDois)
console.log(respostaTRES)


// Exercicio3
let a = 10
let b = 25
let c 
c = b
b = a
a = c
console.log(a,b)
console.log("O novo valor de a é",a)
console.log("O novo valor de b é",b)

