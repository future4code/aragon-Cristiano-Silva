const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]
const login = (email, password) =>{
    if(
        email === contas.email && 
        password === contas.password){
        return "Login realizado"
    }else{
        return "Login invalido"
    }
}
console.log(login("astrodev@labenu","abc123"))



