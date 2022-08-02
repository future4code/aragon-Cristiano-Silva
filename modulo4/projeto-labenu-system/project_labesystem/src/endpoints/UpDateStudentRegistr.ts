import { StudentDatabase } from './../database/StudentDatabase';
import { Request, Response } from "express";


export class UpDateStudentRegistr{
    [x: string]: any;
    public async upDate(req:Request, res:Response){
        let errorCode = 400

        try {
            const id = req.params.id 
            const newClassrom_id = req.body.classroom_id

            if (!id) {
                errorCode = 422
                throw new Error("Params inválido.")
            }

            if (!newClassrom_id) {
                errorCode = 422
                throw new Error("Params inválido.")
            }

            const upRegistration = new StudentDatabase()
            const result = await upRegistration.updateRegistration(id, newClassrom_id)


            res.status(200).send({message: "Classroom altered registration!", result: result})
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}