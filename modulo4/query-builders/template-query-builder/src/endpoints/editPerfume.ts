import { TABLE_PERFUMES } from './../database/tableNames';
import { Request, Response } from "express";
import connection from "../database/connection";



export const editPerfume = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const id = req.params.id 
        const price = req.body.price 

        if(!price){
            errorCode = 422
            throw new Error("Pamameter not found");            
        } 

        if(price <= 0){
            errorCode = 422
            throw new Error("Price parameter must be greater than 0");            
        }

        const perfumeExists = await connection(TABLE_PERFUMES)
            .select()
            .where("id", "=", `${id}`)

        if(perfumeExists.length === 0){
            errorCode = 404 
            throw new Error("perfume not found");            
        }    

        await connection(TABLE_PERFUMES)
            .update({ price:price })
            .where({ id:id })

        res.status(200).send({message:"perfume price changed successfully."})    

    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}