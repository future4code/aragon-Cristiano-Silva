/* Crie 1 objeto que representa a sua pessoa e possua 3 propriedades:
- nome, de tipo string;
- idade, de tipo number;
- corFavorita, enum das cores do arco-íris. */

enum TipoDaCor {
    VIOLETA = "Violeta",
    ANIL    = "Anil",
    AZUL    = "Azul",
    VERDE   = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",    
    VERMELHO= "Vermelho"
}

type Pessoa = {
    nome: string,
    idade: number ,
    corFavorita: TipoDaCor
}
const usuario = {
    nome: process.argv[2],                          // Cristiano
    idade: Number(process.argv[3]),                 // 34
    corFavorita: process.argv[4] = TipoDaCor.ANIL   // Anil
}
const imprimePessoa = (pessoa :Pessoa) =>{
    return pessoa
}
console.log(imprimePessoa(usuario))