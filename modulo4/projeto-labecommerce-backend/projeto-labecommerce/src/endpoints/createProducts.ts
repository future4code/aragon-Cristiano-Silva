import { TABLE_PRODUCTS } from './../database/tableNames';
import { Product } from './../models/Product';
import { Request, Response } from "express";
import connection from '../database/connection';


export const createProducts = async(req:Request, res:Response)=>{
    let errorCode = 400

    try {
        const name = req.body.name
        const price = Number(req.body.price)

        const newProduct : Product ={
            id: Date.now().toString(),
            name: name,
            price: price
        }

        await connection(TABLE_PRODUCTS)
            .insert({
                id: newProduct.id,
                name: newProduct.name,
                price: newProduct.price
            })
            res.status(201).send({message: "new product created successfully", product :newProduct})
        
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}