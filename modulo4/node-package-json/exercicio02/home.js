//Exercicio2
const escolha = process.argv[2]
const primeiroNum = Number(process.argv[3])
const segundoNum = Number(process.argv[4])

const add = primeiroNum + segundoNum
const sub = primeiroNum - segundoNum
const mult = primeiroNum * segundoNum
const div = primeiroNum / segundoNum


switch(escolha){
    case "add":
        console.log(`A adição dos valores é =${add}`)
        break
    case "sub":
        console.log(`A subtração dos valores é =${sub}`)
        break
    case "mult":
        console.log(`A multiplicação dos valores é = ${mult}`)
        break
    case "div":
        console.log(`A divisão dos valores é ${div}`)
        break
    default: 
        
}




