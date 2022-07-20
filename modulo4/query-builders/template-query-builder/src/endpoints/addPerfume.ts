import { TABLE_PERFUMES } from './../database/tableNames';
import { Perfume } from './../models/Perfume';
import { Request, Response } from "express"
import connection from '../database/connection';


export const addPerfumes = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const {name,brand} = req.body
        const price = Number(req.body.price)
        const ml = Number(req.body.ml)
    
        const newPerfume : Perfume ={
            id: Date.now().toString(),
            name: name,
            brand: brand,
            price:price,
            ml: ml
        }

        await connection(TABLE_PERFUMES)
        .insert({
            id:newPerfume.id,
            name:newPerfume.name,
            brand: newPerfume.brand,
            price: newPerfume.price,
            ml: newPerfume.ml
        })
        res.status(201).send({perfume: newPerfume, message:"Perfume successfully added!"})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}