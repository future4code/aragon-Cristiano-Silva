import { UserDatabase } from './../database/UserDatabase';
import { Request, Response } from "express"


export const getUserById = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id

        const userDatabase = new UserDatabase()
        const result =  await userDatabase.getUserById(id)
        

        res.status(200).send({ result: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}