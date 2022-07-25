import { Product } from './../models/Product';
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from './../database/tableNames';
import { Purchase } from './../models/Purchase';
import { Request, Response } from "express"
import connection from '../database/connection';



export const addPurchase = async(req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const quantity = req.body.quantity
        
        if (!user_id || !product_id || !quantity) {
            throw new Error("Body inválido.")
        }

        const searchUser = await connection(TABLE_USERS)
        .select()
        .where({id: user_id})

        if(searchUser.length === 0){
            errorCode = 404
            throw new Error("User not found");
            
        }

        const searchProduct =  await connection(TABLE_PRODUCTS)
            .select()
            .where({ id: product_id})

            if(searchProduct.length === 0){
                errorCode = 404
                throw new Error("Product not found ");
            }

        const product: Product = searchProduct[0]


        const newPurchase: Purchase ={
            id: Date.now().toString(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: product.price * quantity
        }
        
        await connection(TABLE_PURCHASES).insert(newPurchase)
            res.status(201).send({message:"new purchase successfully!", purchase: newPurchase})
        
        
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}