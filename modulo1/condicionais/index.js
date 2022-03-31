//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO.

//1. A Função solicita ao usúario que o mesmo digite um número para testar com uma condição verificaando se 
// o numero digitado for par o mesmo passa no teste, caso impar não passou no teste.

//2. O código serve para retornar conforme a informação dada pelo úsuario a escolha da fruta imprimindo a fruta escolhida e o valor dela.
// caso seja escolhida a fruta maçã ira imprimir = o preço da fruta maça é 2.25  -- Retirando o Break abaixo da frota Pêra o valor será retornado 5
// 

//3. a primeira linha solicita ao usúario que digite um numero.
// caso usúario digite 10 ira imprimir = Esse número passou no teste --- caso digitado -10 ira retornar erro no console pela variavel let mensagem,
// a mesma se encontra dentro de um If de uma condição.


//EXERCICIOS DE CÓDIGOS 


//1.

const idade = Number(prompt("Digite a sua idade:"))
if (idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}





//2.

const turno = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno) para sabermos qual horádio você estuda: ")

const matutino   = "M"
const vespertino = "V"
const noturno    = "N"

if (turno === matutino){
    console.log("Bom Dia!")
} else if (turno === vespertino){
    console.log("Boa Tarde!")
} else if (turno === noturno){
    console.log("Boa Noite!")
} else {
    console.log("informação incorreta, digitar novamente.")
}



//3.


let turno1 = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno) para sabermos qual horádio você estuda: ")
let retorno 
switch (turno1) {
    case "M":
        retorno = "Bom Dia!"
        break;
    case "V":
        retorno = "Boa Tarde!"    
        break
    case "N":
        retorno = "Boa Noite!"
        break
        default:
        retorno = "informação incorreta, digitar novamente."
        break;        

}
console.log(retorno)

//4.

const genero = prompt("Qual o gênero do filme ira assistir?")
const preco  = Number(prompt("Qual o valor do ingresso?"))

if (genero === "fantasia" && preco <= 15){
    console.log("Bom Filme!")
} else {
    console.log ("Escolha outro Filme")
}


// DESAFIO
//1

const genero1 = prompt("Qual o gênero do filme ira assistir?")
const preco1  = Number(prompt("Qual o valor do ingresso?"))
const lanchinho = prompt("Qual lanche de preferencia irá querer, temos algumas opções: pipoca, chocolate, doces?")

if (genero1 === "fantasia" && preco1 <= 15){
    console.log("Bom Filme!")
    console.log(`Aproveite seu lanche, ${lanchinho}`)
} else {
    console.log ("Escolha outro Filme")
}


//2. incompleto faltando concluir

const nomeCompleto = prompt("Informe seu nome completo:")
const tipoDoJogo   = prompt("Informe o tipo de jogo IN ou DO")
const etapaDoJogo  = prompt("Informe a etapa do jogo que prefere assistir SF, DT ou FI")
const categoria    = Number(prompt("Qual a categoria pode ser 1,2,3 e 4"))
const quantidadeDeIngressos = Number(prompt("Quantos ingressos deseja?"))


if (tipoDoJogo === "DO"){
    console.log("---Dados da Compra---")
    console.log("Nome do CLiente:",nomeCompleto)
    console.log("Tipo do Jogo:",tipoDoJogo)
    console.log("Etapa do Jogo:",etapaDoJogo)
    console.log("Categoria:",categoria)
    console.log("Quantidade de Ingressos:",quantidadeDeIngressos)
    console.log("---Valores---")
    console.log("Valor do ingresso:")
    console.log("Valor Total:")
} else if ( tipoDoJogo === "IN"){
    console.log("---Dados da Compra---")
    console.log("Nome do CLiente:",nomeCompleto)
    console.log("Tipo do Jogo:",tipoDoJogo)
    console.log("Etapa do Jogo:",etapaDoJogo)
    console.log("Categoria:",categoria)
    console.log("Quantidade de Ingressos:",quantidadeDeIngressos)
    console.log("---Valores---")
    console.log("Valor do ingresso:")
    console.log("Valor Total:")
}


    