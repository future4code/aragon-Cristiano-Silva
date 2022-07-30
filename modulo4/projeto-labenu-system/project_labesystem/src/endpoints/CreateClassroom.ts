import {  IClassroomDB } from '../models/Classroom';
import { Request, Response } from "express";
import { ClassroomDatabase } from "../database/ClassroomDatabase";

export class CreateClassroom{ 
    public async createClass(req: Request, res: Response) {
    let errorCode = 400

    try {
        const name = req.body.name
        const module = req.body.module

        if (!name || !module) {
            errorCode = 422;
            throw new Error("Missing data in order to update task.");
        };

        if (typeof name !== "string" || typeof module !== "string") {
            errorCode = 422;
            throw new Error("Incorrect passed parameters");
        };
        

        const classroom :  IClassroomDB = {
            id: Date.now().toString(),
            name,
            module
        }
        const createDatabase = new ClassroomDatabase()
        await createDatabase.createClass(classroom)

        res.status(201).send({message: "Classroom created successfully", classroom: classroom})
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}

}