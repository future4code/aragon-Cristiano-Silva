import { TABLE_USERS } from './../database/tableNames';
import { User } from './../models/User';
import { Request, Response } from "express";
import connection from '../database/connection';


export const createUser = async (req:Request, res:Response)=>{
    let errorCode = 400

    try {
        
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("email and password parameters must be filled")
        }

        if (typeof email !== "string") {
            errorCode = 422
            throw new Error("parameter email must be string")
        }

        if (typeof password !== "string") {
            errorCode = 422
            throw new Error("parameter password must be string")
        }
        


        const newUser: User ={
            id: Date.now().toString(),
            email:email,
            password:password
        }

        await connection(TABLE_USERS)
            .insert({
                id: newUser.id,
                email:newUser.email,
                password:newUser.password
            })

            res.status(201).send({message:"user created successfully", user:newUser})
        
    } catch (error) {
        res.status(errorCode).send({message:errorCode})
    }
}