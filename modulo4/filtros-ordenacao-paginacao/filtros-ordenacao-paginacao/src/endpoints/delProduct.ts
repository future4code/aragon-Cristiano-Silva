import { TABLE_PRODUCTS } from './../database/tableNames';
import { Request, Response } from "express";
import connection from '../database/connection';


export const delProduct = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {

        const id = req.params.id

        await connection
        .raw(` DELETE FROM ${TABLE_PRODUCTS}
        WHERE id = ${id}
        `)
        res.status(200).send({message: "Product successfully deleted"})
        
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }


}