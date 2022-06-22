//Tabuada de 1 a 10

let numero = 1

while(numero <=10){
    for(let x =1; x<=10; x++){
        console.log(`${numero} x ${numero*x}`) 
    }
    console.log("__________________")
    numero++
}
 
//Função tabuada iniciando com os parametros "a" escolhendo a qual tabuada se refere e "b" até
//quando ira se repetir, e chamando a função passando os argumentos escolhidos.

const tabuada =(a, b) =>{
    for(let i= 1; i <=b; i++){
        console.log(`${a} x ${i} = ${a * i}`)
    }

}
tabuada(2,50)
