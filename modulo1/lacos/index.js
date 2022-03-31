// Exercícios de interpretação de código
//1.a retorna a soma da varivel contador com valor da variavel i = a 10 
//2.O código ira percorrer a array com a condição de buscar todos os números que forem maiores que 18 e imprimir no console
// 3. O código ira retornar a quantidade de * informada pelo usuario preenchendo as linhas informadas.


// Exercicios de escrita de código
//1.
/*

let quantidadeDeBichinhos = Number(prompt("Quantos bichinhos você tem:"))
let listaBichinhos = []

if (quantidadeDeBichinhos === 0 ){
    console.log("Que pena! Você pode adotar um pet!")
} else if (quantidadeDeBichinhos > 0 ){
    for (let i = 0; i < quantidadeDeBichinhos; i++){
        
        let nomeDoBichinho = prompt("Informe o nome do bichinho:")
        listaBichinhos.push(nomeDoBichinho)
        console.log(listaBichinhos)
    }
   
}


//2.
//A.

let arrayOriginal = [80,30,130,40,60,21,70,120,90,103,110,55]
   
function imprimir (){
     for(let num of arrayOriginal){
        console.log(num)
    }
}
imprimir()


//B.


let arrayOriginal1 = [80,30,130,40,60,21,70,120,90,103,110,55]
   
function imprimir (){
     for(let num of arrayOriginal1){
        console.log(num / 10)
    }
}
imprimir()
*/

//c
let arrayOriginal2 = [80,30,130,40,60,21,70,120,90,103,110,55]
   
function imprimir (){
    let novaArray = []
    for(let num of arrayOriginal2){
        arrayOriginal2.push(novaArray)
        console.log(num % 1)
        console.log(novaArray % 2)
        
    }
}
imprimir()