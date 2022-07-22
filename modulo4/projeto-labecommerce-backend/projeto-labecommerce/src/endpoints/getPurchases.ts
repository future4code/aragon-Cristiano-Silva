import { TABLE_PURCHASES, TABLE_PRODUCTS, TABLE_USERS } from './../database/tableNames';
import { Request, Response } from "express"
import connection from "../database/connection"


export const getPurchases = async (req:Request, res:Response) =>{
    let  errorCode = 400

    try {
        const user_id= req.params.user_id

         if(!user_id){
            errorCode = 422
            throw new Error("missing parameteres");            
        }

        const resultUser = await connection(TABLE_USERS)
        .select("*")
        .where("id", "=", `${user_id}`)
 
         if(resultUser.length === 0){
            errorCode = 409
            throw new Error("missing parameteres");            
        } 
     
        const resultPurchases = await connection(TABLE_PURCHASES)
        .select("*")
        .where("user_id", "=", `${user_id}`)

        if(resultPurchases.length === 0){
            errorCode = 409
            throw new Error("missing parameteres");            
        }
 
        const [list] = await connection.raw(`
            SELECT
            Labe_Users.email,
            Labe_Products.name,
            Labe_Products.price,
            Labe_Purchases.quantity,
            Labe_Purchases.total_price
            FROM Labe_Purchases
            INNER JOIN Labe_Products
            ON Labe_Products.id = Labe_Purchases.product_id
            INNER JOIN Labe_Users
            ON Labe_Users.id = Labe_Purchases.user_id
            WHERE user_id = "${user_id}";
        `)


        res.status(200).send({message:"purchases list successfully!", result:list})      

    } catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}