// Cadastro de Cliente

const cadastroClientes = [
    { id: 1, nome:"Fulano" },
    { id: 2, nome:"Ciclano" },
    { id: 3, nome:"Beltrano" },
    { id: 4, nome:"Fulana" },
    
]
const users =() =>{
    cadastroClientes.push({id:5, nome:"Ciclana"})
    }
users()
console.log(cadastroClientes)


