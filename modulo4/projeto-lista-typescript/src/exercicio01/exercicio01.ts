//Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável. 


const resultado =(valor:any) =>{
    return typeof valor
}
console.log(resultado(3))
console.log(resultado("hey"))
console.log(resultado([]))
console.log(resultado({}))
console.log(resultado(true ||false))