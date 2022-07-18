import { List, account, AccountPay } from './data';
import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

//get account list
app.get("/users",(req: Request, res: Response) =>{
    res.send(account)
})

// post create new account
app.post("/users",(req:Request, res:Response) =>{
    let errorCode: number = 400


    try {
        const {name,cpf,birthDate} = req.body

        if (!name || !cpf || !birthDate){
            errorCode = 400;
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
        
         
        //verifica se há cpf existente 
        account.forEach(user => {
            if(user.cpf === cpf){
                errorCode = 409;
                throw new Error("Cpf already exists.");
            }
        })

        //verifica se é maior de idade 
        const ageYearArray = birthDate.split("/")
        const ageYear = ageYearArray[ageYearArray.length -1]
        const age = new Date().getFullYear() - Number(ageYear)

        if(age <18){
            errorCode = 400
            throw new Error("Age must be greater than or equal to 18");
       }

       if(name.length <3){
            errorCode
            throw new Error("Characters must be greater than 3");
            
       }


        const newAccount : List ={
            id: Date.now(),
            name:name,
            cpf:cpf,
            birthDate: birthDate,
            totalBalance: 0,
            list:[]
            
        }

        account.push(newAccount)

        res.status(201).send({
            message:"User created successfuly!",
            account:account
        })
            
        } catch (error) {
            if(error.statusCode === 200) {
                res.status(500).end()
            } else {
                res.status(errorCode).send(error.message)
            }
        }
})

//get account user
app.get("/users/:id",(req:Request, res:Response) =>{
    let errorCode: number = 400

    try {
        const id = Number(req.params.id) 

       const userId = account.find((user) =>{
            return user.id === id
        })

        if (!userId) {
            errorCode = 422;
            throw new Error("Invalid id.");
        }
     
        res.status(200).send({userId: userId, totalBalance: userId.totalBalance})
        
    } catch (error) {
        if(error.statusCode === 200){
            res.status(500).end()
        } else {
            res.status(errorCode).send(error.message)
        }
    }    
})

//put edit balance
app.put("/users/:id",(req:Request, res:Response) =>{
    let errorCode: number = 400

    try {
        const id = Number(req.params.id)
        const {avaliable} = req.body



        const userId = account.find((user) =>{
            return user.id === id
        })
        if(!userId ){
            errorCode = 422;
            throw new Error("Id doesn´t match a valid user.");
        } 

        userId.totalBalance += avaliable // userId = userId + avaliable

        if(typeof avaliable !== "number"){
            errorCode = 422
            throw new Error("value type cannot be number");
            
        }

        if(avaliable <=0){
            errorCode = 400
            throw new Error("Invalid Value");
            
        }
        
    
        res.status(200).send({message:"new balance released successfully",
        account:account
        }) 

    } catch (error) {
        if(error.statusCode === 200){
            res.status(500).end()
        } else {
            res.status(errorCode).send(error.message)
        }
    }
})

//Put -pay the bill
app.put("/users/:id/pay", (req:Request, res:Response) =>{
    let errorCode= 400

    try {
        const id = Number(req.params.id)
        const {valueAccount, description} = req.body

        if(!valueAccount || !description){
            errorCode = 400
            throw new Error("missing parameters");            
        }
        if(typeof valueAccount !== "number"){
            errorCode = 422
            throw new Error("Invalid parameter type");            
        }
        if(typeof description !== "string"){
            errorCode = 422
            throw new Error("Invalid parameter type");            
        }
        if( valueAccount <=0){
            errorCode = 422
            throw new Error("payment amount must be greater than zero");            
        }
        if(description.length <6 ){
            errorCode = 422
            throw new Error("description must be longer than 6 characters");            
        }

        const acc = account.find((item) =>{
            return item.id === id
        })

        if(!acc){
            errorCode= 404
            throw new Error("account not found");            
        }

        if(acc.totalBalance < valueAccount){
            errorCode = 400
            throw new Error("insufficient value");            
        }

        acc.totalBalance -= valueAccount
        const dateActual = new Date().toLocaleString().split(" ")[0]

        const newPgto:AccountPay = {
            description: description,
            valueAccount: valueAccount,
            datePgto: dateActual
        }

        acc.list.push(newPgto)
        res.status(200).send({message:"successful payment", account:account})


    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
})

app.listen(3003, () =>{


    console.log("Server is running at http://localhost:3003")
})