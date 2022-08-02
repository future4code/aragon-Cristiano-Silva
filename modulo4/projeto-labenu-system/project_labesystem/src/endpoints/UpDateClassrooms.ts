import { ClassroomDatabase } from './../database/ClassroomDatabase';
import { Request, Response } from "express";

export class UpDateClassrooms {
    [x: string]: any;
    public async updateClass(req: Request, res:Response){
        let errorCode = 400

        try {
            const id = req.params.id
            const updateModule = req.body.module

            if (!updateModule) {
                errorCode = 422
                throw new Error("Body inválido.")
            }

            if (!id) {
                errorCode = 422
                throw new Error("Params inválido.")
            }

            if(typeof updateModule === "number"){
                errorCode = 422
                throw new Error("Incorrect past parameters.")
            }

            const upDate = new ClassroomDatabase()
            const result = await upDate.updateClassrooms(id, updateModule)

            res.status(201).send({message: "Classrooms updated successfully", classroomUpdate: result})
            
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }
}