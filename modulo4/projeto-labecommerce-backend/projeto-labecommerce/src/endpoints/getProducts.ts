import { TABLE_PRODUCTS } from './../database/tableNames';
import { Request, Response } from "express";
import connection from "../database/connection";


export const getProducts = async (req:Request, res:Response)=>{
    let errorCode = 400

    try {
        const allProducts = await connection(TABLE_PRODUCTS)
        .select()

        res.status(200).send({message: "Products List", products: allProducts})

        
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }


}