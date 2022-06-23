//Criar duas listas de objetos, mas sem repetir os que possuem o mesmo valor em uma propriedade.
//Entrada - Duas Listas de objetos com propriedade nome.
//Saída - Uma lista unificada com todos os objetos recebidos, porém sem repetri nomes.

let primeiraLista = [
	{ nome: "Banana"} ,
    { nome: "Uva"} ,
    { nome: "Laranja"} ,
    { nome: "Maça"} ,
    { nome: "Melancia"} ,
    { nome: "Banana"} ,
	
]
let segundaLista= [
    { nome: "Limão"} ,
    { nome: "Cebola"} ,
    { nome: "Melancia"} ,
    { nome: "Banana"} ,
    { nome: "Maça"} ,
    { nome: "Laranja"} ,


	
]
let result = primeiraLista.concat(segundaLista)
let reduced =[]
result.forEach((item) =>{
    let duplicated = reduced.findIndex(redItem =>{
        return item.nome == redItem.nome
    }) > -1

    if(!duplicated){
        reduced.push(item)
    }

})
console.log(reduced)