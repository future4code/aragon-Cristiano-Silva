const validaInput = (input) =>{
    const resposta ={
        isError: false,
        errors:[]
    }

    const chaves = Object.keys(input)

    for(let chave of chaves){
        if(input[chave] === undefined){
            resposta.isError = true
            resposta.errors.push(chave)
        }
    }
    return resposta
}
console.log(validaInput({id: 1, nome: undefined}))
console.log(validaInput({id: 1, nome: "astrodev"}))
console.log(validaInput({id: 1, nome: undefined, email: undefined}))