import { TABLE_PURCHASES } from './../database/tableNames';
import { Purchase } from './../models/Purchase';
import { Request, Response } from "express"
import connection from '../database/connection';



export const addPurchase = async(req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const user_id = req.body
        const product_id = req.body
        const quantity = req.body
        const total_price = req.body        


        const newPurchase : Purchase ={
            id: Date.now().toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        }

        await connection(TABLE_PURCHASES)
            .insert({
                id: newPurchase.id,
                user_id: newPurchase.user_id,
                product_id: newPurchase.product_id,
                quantity: newPurchase.product_id,
                total_price: newPurchase.total_price
            })

            res.status(201).send({message:"new purchase successfully!", purchase: newPurchase})
        
        
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}