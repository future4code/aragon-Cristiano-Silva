import { products, List } from './data';
import express, { Request, Response } from "express";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req:Request, res:Response) =>{
    try {
        res.status(200).send({message:"Api funcionando!."})
    } catch (error) {
        res.status(500).send({mensage: error.message})
    }    
})

app.get("/products", (req:Request, res:Response) =>{
    try {
        const result = products
        res.status(200).send({message:"Consulta a lista realizada com sucesso!",result})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
})

app.post("/create/:id", (req:Request, res:Response) =>{

    try {
        const {price,name} = req.body

        if (price <= 0){
            res.statusCode = 422
            throw new Error("Erro: valor do 'price', deve ser maior que 0 ");
        }

        const list : List ={
            id: Date.now(),
            name: name,
            price: price 
        }
        products.push(list)
        res.status(201).send({message: "Novo produto", list:products})
        
    } catch (error) {
        res.send({message:error.message})
    }   
})

app.put("/edit/:id",(req:Request, res:Response) =>{
    try {
        const {price} =req.body 
        const id = Number(req.params.id)
        
        const result= products.map((prod) =>{
            if(prod.id === id) {
             prod.price = price
            } 
            return prod
        })

        if(price <= 0){
            res.statusCode = 404
            throw new Error("Erro: valor do 'price', deve ser maior que 0 ");            
        }
        if(id !== id){
            res.statusCode = 404
            throw new Error("Erro: faltando passar a informação da 'id'");            
        }       
        
        res.status(200).send({message: "Novo valor adicionado ao produto!", result:result})

    } catch (error) {
        res.send({message: error.message})
    }
})

app.delete("/product/:id",(req:Request, res:Response) =>{
    const id= Number(req.params.id)

    const search = products.findIndex((product) => {
        return product.id === id
    })

    if (search === -1){
        return res.status(200).send({message:"Produto não encontrado!",id:id} )
    }

    products.splice(search,1)

    res.send({message:"Produto deletado com sucesso!", products:products})


})

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})