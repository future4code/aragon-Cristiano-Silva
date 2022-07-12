import { User, users } from './data';
import express, { Request, Response } from "express";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

//ex02 Get - endpoint que irá retornar uma lista de usúarios admin ou normal, também temos a opção de escolher de acordo com a função
app.get("/list", (req:Request, res:Response) =>{
    try {
        const {search} = req.query

        if(search !== "admin" && search !== "normal"){
            return res.send({
                search:search,
                users:users
            })
        }
        if(search === "admin"){
            const result = users.filter((user)=>{
                return user.role === "admin"
            })
            return res.send({
                users: result,
                search: search
            })
        }else if(search === "normal") {
            const result = users.filter((user) =>{
                return user.role === "normal"
            })
            return res.status(200).send({
                message:"",
                users: result,
                search: search
            })
        }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
   
})

//ex03 
app.post("/create",(req:Request, res:Response) =>{
    let errorCode: number = 400

    try {
        const {name, role, age, email} = req.body
        

        if(!name || !age || !email || !role){
            errorCode = 422
            throw new Error("Informações de nome, idade, email ou função são necessarias preenchimento");            
        }
        if(typeof age !== "number" && typeof email !== "string" && typeof name !== "string" && typeof role !=="string"){
            errorCode = 422
            throw new Error("A informação da idade deve ser number e informações email, name e role devem ser strings");            
        }
        if(role !== "admin" && role!== "normal"){
            errorCode = 422
            throw new Error("A informação de role deve ser unicamente admin ou normal strings e letras minusculas");
        }


        const newUser : User ={
            id: Date.now(),
            name: name,
            email: email,
            age: age,
            role: role

        }

        const emailUnique = users.map((unique) =>{
            if(unique.email === email){
                errorCode = 422
                throw new Error("Email já existente, Tente novamente!");
                
            }
        })
        emailUnique

        users.push(newUser)
        res.status(201).send({message:"Novo usúario cadastrado com sucesso!", users:users})


    } catch (error) {
        res.send(error.message)
    }
   
})


//ex04 Put- editando email
app.put("/edit/:id",(req:Request, res:Response) =>{
    let errorCode : number =400

    try {
        const id = Number(req.params.id)
        const {email} = req.body

        if(id <=0 || id !== id ||id ===undefined){
            errorCode = 422
            throw new Error("É necessario incerir Id válida.");
        }
        if(typeof email !== "string" || id <=0 ){
            errorCode = 422
            throw new Error(" Email deve ser uma string");
        }
        

        const upDateEmail = users.findIndex(user => user.id ===id)
        users[upDateEmail].email = email

        res.status(200).send({message:"Email alterado com sucesso!", user:users[upDateEmail]})

    } catch (error) {
        res.send(error.message)
    }


    
})


app.delete("/delete/:id", (req:Request, res:Response) =>{
    try {
         let errorCode = 400

        const id = Number(req.params.id)

        const userDel = users.findIndex(user => user.id === id)

        if(userDel <0 || userDel === null || userDel ===undefined){
            errorCode = 422
            throw new Error("Id não corresponde a nenhum usuário");        
        }

        users.splice(userDel, 1)
        res.status(200).send({message:"Usúario removido com sucesso!"})

    } catch (error) {
        res.send(error.message)
    }
    
   
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

