import { StudentDatabase } from './../database/StudentDatabase';
import { IStudentDB } from './../models/Student';
import { Request, Response } from "express";

export class CreateStudent{ 
    public async createStud(req: Request, res: Response) {
    let errorCode = 400

    try {
        const name = req.body.name
        const email = req.body.email
        const birthdate = req.body.birthdate
        const classroom_id = req.body.student_id

        const student :  IStudentDB ={
            id: Date.now().toString(),
            name,
            email,
            birthdate: new Date(birthdate),
            classroom_id,
            
        }
        const createDatabase =new StudentDatabase()
        createDatabase.createStud(student)

        res.status(201).send({message: "Student created successfully", student: student})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}

}