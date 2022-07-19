import { TABLE_PRODUCTS } from './../database/tableNames';
import { Request, Response } from "express"
import connection from "../database/connection"


export const putProduct = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const id = req.params.id 
        const price = Number(req.body.price)

        await connection.raw(`
        UPDATE ${TABLE_PRODUCTS}
        SET price = ${price}
        WHERE id = "${id}"
        
        `)
        res.status(200).send({message:"New price successfully added"})

    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}