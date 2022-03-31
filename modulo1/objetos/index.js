// Exercícios de Interpretação 
// 1.a   = irá imprimir no console o primeiro elemento do indice da array elenco.  = irá imprimir no console o ultimo elemento do indice da array elenco
// localizado utilizando .length = ira imprimir no console um array de objetos selecionando o elemento 2 da array.

// no objeto cachorro tiveram copias e alterações na propriedade nome. primeiro console imprime dados com nome cachorro JUBA
// na propriedade copiada para gato alteração apenas no nome para JUBA, na propriedade tartagura alteração apenas da letra "a", para "o"
// A sintaxe dos Três pontos copia a propriedade de um objeto.


// Exercicios de escrita de código
// 1.a e B


const pessoa = {
    nome: "natalia",
    apelidos: ["naty", "nata", "natinha"],
    
}   
    function novaPessoa(pessoa2) {
        const dados ={
            ...pessoa2,
            novosApelidos: ["natalina", "natao", "nana"]
        }

    
    const imprimir = `Eu sou ${dados.nome}, mas pode me chamar de: ${dados["novosApelidos"]}`
    console.log(imprimir)
}
novaPessoa(pessoa)


// 2.A



const dadosPessoais1 = {
    nome: "Lucas",
    idade: 25,
    profissao: "eletricista"

}

    const dadosPessoais2 = {
    nome: "Davi",
    idade: 22,
    profissao: "jogador"
    }

    function dadosGerais (dadosPessoais1, dadosPessoais2){
        console.log([dadosPessoais1.nome, dadosPessoais1.nome.length, dadosPessoais1.idade, dadosPessoais1.profissao, dadosPessoais1.profissao.length])
        console.log([dadosPessoais2.nome, dadosPessoais2.nome.length, dadosPessoais2.idade, dadosPessoais2.profissao, dadosPessoais2.profissao.length])     
        return dadosPessoais1, dadosPessoais2   
       

}
dadosGerais(dadosPessoais1,dadosPessoais2)


// 3.

const carrinho =[]

const fruta1 = {
    nome: "maça",
    disponibilidade : true
}

const fruta2 = {
    nome: "pera",
    disponibilidade: true
}

const fruta3 = {
    nome: "limao",
    disponibilidade: true
}

function sacolaoDeFrutas (fruta1,fruta2,fruta3){
    const carrinho = [fruta1,fruta2,fruta3]
  
    console.log(carrinho)
    
}
sacolaoDeFrutas(fruta1,fruta2,fruta3)


// Desafio 
// 1.

function dadosDeUsuario (){
    const nome = prompt("Digite aqui o seu nome:")
    const idade = prompt("Digite aqui a sua idade:")
    const profissao = prompt("Digite a sua profissão:")

    const resultado = {
        nome: nome,
        idade:idade,
        profissao:profissao
    }
    console.log({nome,profissao,idade})
}
dadosDeUsuario()

// 2.

function filmes (nome,anoDeLancamento){
    

}