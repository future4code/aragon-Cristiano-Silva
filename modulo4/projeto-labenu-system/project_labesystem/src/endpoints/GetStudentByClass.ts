import { StudentDatabase } from './../database/StudentDatabase';
import { Request, Response } from "express";


export class GetStudentByClass {
    public async getByStudClass(req:Request, res:Response){
        let errorCode = 400

        try {
            const searchClassrom = req.body.classroom_id


            const studentByClassDatabase = new StudentDatabase()
            const result = await studentByClassDatabase.getStudentByClassroom(searchClassrom)


            res.status(200).send({message: "Classrooms List!", result: result})
        } catch (error) {
            res.status(errorCode).send({message: error.message});
        }
    }
}