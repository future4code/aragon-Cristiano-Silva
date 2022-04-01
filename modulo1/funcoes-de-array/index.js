//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO 
//1. imprimiu no colcole 3 arrays e seus respectivos objetos nome e apelido utilizando o map com os parametros item, index, array
//2. utilizando o map pelo parametro item retornou o nome dos usuarios.
//3. utilizando o filter o codigo filtrou o apelido chijoe utilizando (!==) foi impresso apenas o que era diferente do apelido selecionado.


//Exercicios de escrita de código

//1.a

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]



const nomeDoguinhos = pets.map ((pet) => {
    return pet.nome

})
console.log(nomeDoguinhos)

//1.b

const petSalsicha = pets.filter ((pet) => {
    return pet.raca == "Salsicha"

})

console.log(petSalsicha)


//1.c
const mensagemPoodles = pets.filter ((pet) => {
    return pet.raca === "Poodle"
})

console.log(mensagemPoodles)
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a" , mensagemPoodles)


//2.a

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeItem = produtos.map((item) =>{
    return item.nome

 })
 console.log(nomeItem)


 //2.B

const nomePrecoItem = produtos.map((item) => {
    const nomeProduto = item.nome
    const precoProduto = item.preco
    const resultado = item.preco * 0.05
    const novaArray =[]
    //novaArray.push(nomeProduto,resultado)
    console.log([`nome: ${nomeProduto},preco com desconto de 5%:  R$${resultado}`])
})


//2.c

const categoriaBebida = produtos.filter((bebida) => {
    return bebida.categoria === "Bebidas"
})
console.log(categoriaBebida)
