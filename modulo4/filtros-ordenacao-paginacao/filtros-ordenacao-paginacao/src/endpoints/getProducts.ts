import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_USERS } from "../database/tableNames"



export const getProducts = async (req: Request, res:Response)=>{
    let erroCode = 400

    try {
        const query = req.query.q
        const sort = req.query.sort || "name"
        const order = req.query.order || "asc"
        //pagination
        const limit = Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const offset  = limit * (page -1);


        if(query){
            const [result] = await connection
            .raw(`SELECT * FROM ${TABLE_PRODUCTS}
            WHERE name LIKE "%${query}%"
            ORDER BY ${sort} ${order}
            LIMIT ${limit}
            OFFSET ${offset}
            `)

            return res.status(200).send({result: result})
        }
      
        const [result] = await connection
        .raw(`SELECT * FROM ${TABLE_PRODUCTS}
         ORDER BY ${sort} ${order}
         LIMIT ${limit}
         OFFSET ${offset}
        `)
        res.status(200).send({result: result})
    } catch (error) {
        res.status(erroCode).send({message:error.message})
    }

 
}