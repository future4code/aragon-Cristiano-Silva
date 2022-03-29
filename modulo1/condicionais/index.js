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