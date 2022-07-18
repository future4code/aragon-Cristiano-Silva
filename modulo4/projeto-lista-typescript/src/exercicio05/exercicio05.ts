/* Considerando o array de usuários a seguir, crie uma função que receba este array como parâmetro e retorne
uma lista com apenas os emails dos usuários de role “admin”.  */
type Dados= {
    name: string,
    email:string,
    role:string
}

const usuario: Dados[]=
[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},  
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

 const buscarRoleAdmin =(usuario: Dados[], roleAdmin:string):string[] =>{
    const filtrar = usuario.filter(
        (user) =>{
            return user.role === roleAdmin
        }
    ).map(
        (use) =>{
            return use.email
        }        
    )
    return filtrar
}
console.log(buscarRoleAdmin(usuario,"admin"))


/* 
const buscarRoleAdmin =({ role  }) => role === "admin"
const buscaEmail      =({ email }) =>  ({ email })
console.log(
    usuario
        .filter(buscarRoleAdmin)
        .map(buscaEmail)
)  
 */




 

