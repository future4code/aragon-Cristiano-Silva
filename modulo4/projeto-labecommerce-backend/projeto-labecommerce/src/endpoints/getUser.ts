import { TABLE_USERS } from './../database/tableNames';
import { Request, Response } from "express";
import connection from '../database/connection';


export const getUser = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const allUsers= await connection(TABLE_USERS)
        .select("*")

        return res.status(200).send({message:"Users List",users:allUsers})

        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}