//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores.
// Refatore a função para o Typescript.

function imprimeTresCoresFavoritas():void {
    const cor1 = process.argv[2]
    const cor2 = process.argv[3]
    const cor3 = process.argv[4]
    console.log([cor1, cor2, cor3])
 }
 imprimeTresCoresFavoritas() 

//executando o comando e passando as cores escolhidas - npm run ex02 azul verde vermelho
