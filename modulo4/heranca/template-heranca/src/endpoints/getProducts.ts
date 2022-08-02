import { ProductDatabase } from './../database/ProductDatabase';
import { Request, Response } from "express"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
    //    const result = await connection(TABLE_PRODUCTS).select()
        
        const productDatabase = new ProductDatabase
        const result = await productDatabase.getAllProducts()

        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}