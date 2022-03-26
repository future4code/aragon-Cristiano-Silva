// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const numero1 = Number(prompt("Digite um número:"))
  const numero2 = Number(prompt("Digite outro número:"))
  const total = numero1 * numero2

  console.log(total)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual =        Number(prompt("Digite o ano atual:"))
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"))

  console.log(anoAtual - anoDeNascimento)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  /*
  const nome = prompt("Digite seu Nome:")
  const idade = Number(prompt("Digite a sua idade:"))
  const email = prompt("Digite seu email:")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
*/
}
imprimeInformacoesUsuario()


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  const cor1 = prompt("Digite a sua cor favorita")
  const cor2 = prompt("Digite a sua segunda cor favorita ")
  const cor3 = prompt("Digite a sua terceira cor favorita")
  const arrayCores =[cor1,cor2,cor3]

  console.log(arrayCores)

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1: "abc"
  string2: "hey"
  return string1 > string2
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array.shift()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const frutas = ["maca", "laranja", "uva"]
  
  frutas.pop()               // remove o ultimo
 //   frutas.splice([])             //adiciona e remove arrays
  frutas.unshift(["uva"])           // adiciona no inicio
 // frutas.push()              // adiciona no final 
  console.log(frutas)
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1: "ola"
  string2: "OlA"
  
  return string1 == string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}