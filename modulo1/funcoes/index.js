// Exercícios de interpretação de código

// 1.a não ira retornar nada no console  // b. mesmo com a alteração o console não iria mostrar nada
/* uma solução para retornar no console poderia ser a execução do código abaixo, criando duas variaveis com o parametro
minhaFuncao e retornando 

function minhaFuncao (variavel){
    return variavel *5 

}

const resultado = minhaFuncao(2)
const resultado2 = minhaFuncao(10)
console.log(resultado,resultado2)


2. A função pede para que o úsuario insira um texto, e com a informação do texto utilizou-se para retornar toLowerCase() para colocar todo texto em minusculo,
e o includes para localizar no texto a palavra cenoura e a variavel const outraFuncao para imprimir com console.log na tela o resultado boolean true ou false

I.   True
II.  True
III. True


*/

// Exercicios de escrita de código
//1. a.



function dadosSobreMim(){
    console.log("Eu sou Cristiano, tenho 34 anos, moro em Recife e sou estudante")

}
dadosSobreMim()
 

//b.


    const nome = prompt("informe seu nome:")
    const idade = Number(prompt("Digite a sua idade"))
    const cidade = prompt("Digite a cidade em que você mora:")
    const profissao = prompt("Digite a sua profissão:")

function dadosDoUsuario (nome,idade,cidade,profissao){  
       
    console.log(`Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)

}
dadosDoUsuario(nome,idade,cidade,profissao)

// Exercicio 02
//a.

const num1 = Number(prompt("Digite um valor:"))
const num2 = Number(prompt("Digite outro valor:"))

function numeros (num1,num2){
    resultado = num1 + num2
    return resultado

}

const imprimeResultado =numeros(num1,num2)
console.log(resultado)



//b.

const numero01 = Number(prompt("Digite um numero:"))
const numero02 = Number(prompt("Digite outro numero:"))

function maiorOuIgual (numero01,numero02){
    res = numero01 >= numero02
    return res
}

const impResultado = maiorOuIgual(numero01,numero02)
console.log(res)




// c.

let n = Number(prompt("Digite um numero:"))


function imparOuPar (n){
    resultado = n % 2 === 0 
    return resultado
}

const imprimirFinal = imparOuPar(n)
console.log(resultado)


//d.


let mensagem = prompt("Digite uma mensagem:")

function imprimirNaTela (mensagem) {
    return imprimirNaTela.length

}

let impressao = imprimirNaTela(mensagem)
console.log(mensagem.toLocaleUpperCase())
console.log(mensagem.length)



//3.

let numero03 = Number(prompt("Digite um número:"))
let numero04 = Number(prompt("Digite outro número:"))
let soma = numero03 + numero04
let subtracao = numero03 - numero04
let multiplicacao = numero03 * numero04
let divisao = numero03 / numero04


function operadores (soma,subtracao,multiplicacao,divisao) {
    console.log(`Números inseridos ${numero03} e ${numero04}`)
    console.log(`Soma: ${soma}`)
    console.log(`DIferença: ${subtracao}`)
    console.log(`Multiplicação ${multiplicacao}`)
    console.log(`Divisão: ${divisao}`)
    
}
operadores(soma,subtracao,multiplicacao,divisao)

//DESAFIO FUNCOES

//1.a 

const nomeDoUsuario = prompt("Informe o seu Usuario:")

const usuario = function (){
    const imprimir = usuario
    console.log(nomeDoUsuario)
}
usuario()


