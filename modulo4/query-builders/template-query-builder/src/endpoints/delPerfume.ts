import { TABLE_PERFUMES } from './../database/tableNames';
import { Request, Response } from "express"
import connection from "../database/connection"



export const delPerfume = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const id = req.params.id 

        await connection(TABLE_PERFUMES)
        .delete()
        .where({id:id})

        res.status(200).send({message:"perfume successfully deleted"})
                
    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}