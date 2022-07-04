/* Crie uma variável chamada ano, do tipo string, e atribua um valor a ela.
 Em seguida, tente reatribuir um número a esta variável.
 O que acontece? Como fazer para que esta variável também aceite number? */



//inclui a condição ou para que possa ser usado tanto uma string quando um number.
let ano:string | number= "2022"
ano = 2023
console.log(ano)