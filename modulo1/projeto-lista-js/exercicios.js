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
  let ultimoElemento = array.pop() 
  let primeiroElemento = array[0]
  array.push(primeiroElemento)
  array[0] = ultimoElemento

  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let maiusc1 =  string1.toUpperCase()
  let maiusc2 =  string2.toUpperCase()
  let resutlado    =  maiusc1 === maiusc2
  
  return resutlado
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"))
  let anoDeNascimento = Number(prompt("Digite o ano de nascimento:"))
  let anoCarteiraRg = Number(prompt("Digite o ano da sua carteira de identidade:"))

  let idade = anoAtual - anoDeNascimento
  let anoRg = anoAtual - anoCarteiraRg

  let comp1 = idade <= 20 && anoRg >= 5
  let comp2 = idade > 20 && idade <= 50 && anoRg >=10
  let comp3 = idade > 50 && anoRg >= 15
  let renovar = comp1 || comp2 || comp3
  console.log(renovar)
  return renovar  



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiplo400 = ano % 400 
  const multiplo4   = ano % 4
  const diferente   = ano % 100

  const condicao = multiplo400 == 0 || multiplo4 == 0 && diferente !=0
  console.log(condicao)
  return condicao
  
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Tem mais de 18 anos?")
  const ensinoMedio = prompt("Possui ensino médio completo?")
  const disponibilidadeDeHorario = prompt("Possui disponibilidade exclusiva de horários do curso:")

  const maiorDeIdade = idade == "sim"
  const ensinoCompleto = ensinoMedio =="sim"
  const disponibilidadeTotal = disponibilidadeDeHorario =="sim"


  const condicoesDoCursoLabenu = maiorDeIdade && ensinoCompleto && disponibilidadeTotal
  console.log(condicoesDoCursoLabenu)
 

}
checaValidadeInscricaoLabenu()