import { TABLE_PRODUCTS } from './../database/tableNames';
import { Request, Response } from "express"
import connection from '../database/connection';


export const newProduct = async (req: Request, res: Response) =>{
    let errorCode = 400

    try {
    
       const name = req.body.name
       const price = Number(req.body.price)

       const newProd = {
        id: Date.now().toString(),
        name: name,
        price: price
       }

       await connection.raw(`
       INSERT INTO ${TABLE_PRODUCTS} (id,name,price)
       VALUES ("${newProd.id}", "${newProd.name}", ${newProd.price})
       `)
       res.status(201).send({message:"product registered successfully", prodct: newProd })
        

        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}