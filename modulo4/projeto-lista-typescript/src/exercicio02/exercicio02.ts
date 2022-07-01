/* Crie um função que receba uma string com o nome e outra string com uma data de nascimento 
(ex.: “24/04/1993”).  A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 
Formato esperado de saída → “Olá, me chamo {NOME}, nasci no dia {DIA}, no mês de {MÊS} e ano de {ANO}. */

type usuario = {
    nome: string
    data: string
}
const pessoa ={
    nome: "Cristiano",
    data: {
        dia:"16",
        mes:"07",
        ano:"1987"
    }
}
const dadosUsuario =(primeiroDado:string) =>{
    return (`Olá me chamo ${pessoa.nome} , nasci no dia ${pessoa.data.dia}, no mês  ${pessoa.data.mes} ,e no ano de ${pessoa.data.ano}.`)
}
console.log(dadosUsuario(""))





