/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Boas vindas ao jogo de Blackjack!")    
let jogo21 = (confirm("Quer iniciar uma nova rodada?"))
   
if (jogo21){
   let usuario1 = comprarCarta()
   let usuario2 = comprarCarta()
   let computador1 = comprarCarta()
   let computador2= comprarCarta()
   let cartasUsuaio = usuario1.valor + usuario2.valor
   let cartasPc     = computador1.valor + computador2.valor

   console.log(`Usúario - cartas: ${usuario1.texto} ${usuario2.texto}  - ${cartasUsuaio}`)
   console.log(`Computador - cartas: ${computador1.texto} ${computador2.texto} - ${cartasPc}`)

if (cartasUsuaio > cartasPc ){
   console.log("O usuário ganhou!")
}else if ( cartasUsuaio < cartasPc ){
   console.log ("O Computador ganhou!")
} else {
   console.log("empate!")
   console.log("Usúario Ganhou!")
   console.log("Computador Ganhou!")
}



}else{
   console.log("O jogo acabou!")
}


     


    
  
  







 