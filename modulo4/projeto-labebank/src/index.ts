import { List, account,  } from './data';
import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/users",(req: Request, res: Response) =>{
    res.send(account)
})


app.post("/users",(req:Request, res:Response) =>{
    let errorCode: number = 400

    try {
        const {name,cpf,birthDate,avaliable} = req.body

        if (!name || !cpf || !birthDate){
            errorCode = 422;
            throw new Error("Missing data in order to create user.");
        }   
        
        if (typeof name !== "string"){
            errorCode = 422;
            throw new Error("Invalid name.");
        }
        if (typeof cpf !== "string"){
            errorCode = 422;
            throw new Error("Invalid cpf.");
        }
        if (typeof birthDate !== "string"){
            errorCode = 422;
            throw new Error("Invalid birthDate.");
        }
        if (typeof avaliable !== "number"){
            errorCode = 422;
            throw new Error("Invalid avaliable.");
        }
               
        account.forEach(user => {
            if(user.cpf === cpf){
                errorCode = 409;
                throw new Error("Cpf already exists.");
            }
        })

        const newAccount : List ={
            id: Date.now(),
            name:name,
            cpf:cpf,
            birthDate: birthDate,
            avaliable: avaliable,
            list:[]
            
        }

        account.push(newAccount)

        res.status(201).send({
            message:"User created successfuly!",
            account:newAccount
        })
            
        } catch (error) {
            if(error.statusCode === 200) {
                res.status(500).end()
            } else {
                res.status(errorCode).send(error.message)
            }
        }
})


app.get("/users/:id",(req:Request, res:Response) =>{
    let errorCode: number = 400

    try {
        const id = Number(req.params.id) 

        if (isNaN(id)) {
            errorCode = 422;
            throw new Error("Invalid id.");
        }

       const userId = account.findIndex((user) =>{
            return user.id === id
        })
        if(userId<0 ){
            errorCode = 422;
            throw new Error("Id doesn´t match a valid user.");
        } 
        
        const userAccount = account.filter((user) =>{
            return user.id === id
        })
        const updateValue = userAccount.map((element) =>{
            const actual= "Saldo atualizado R$ "
            return `${actual}`+element.avaliable
        })
      
        res.status(200).send({account:updateValue, message:"updated balance"})
        
    } catch (error) {
        if(error.statusCode === 200){
            res.status(500).end()
        } else {
            res.status(errorCode).send(error.message)
        }
    }    
})

app.put("/users/:id",(req:Request, res:Response) =>{
    const id = Number(req.params.id)
    const {avaliable} = req.body

    const userAccount = account.findIndex((user)=>{
        return user.id===id
    })

    account[userAccount].avaliable = avaliable


    res.send({user:account,message:"new balance released successfully"}) 

})

app.listen(3003, () =>{
    console.log("Server is running at http://localhost:3003")
})