import { StudentDatabase } from '../database/StudentDatabase';
import { Request, Response } from "express";


export class GetStudents{
    public async student(req: Request, res: Response) {
        let errorCode = 400
        try {
            const searchName = req.body.name

            const studentDatabase = new StudentDatabase()
            const result = await studentDatabase.getStudent(searchName)

            res.status(200).send({message: "success", students:result})
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

}