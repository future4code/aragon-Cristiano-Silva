import { ClassroomDatabase } from './../database/ClassroomDatabase';
import { Request, Response } from "express"


export class SearchClassroom { 
    public async search(req: Request, res: Response){
        let erroCode = 400
        try {
            const searchModule = req.body.module

            const searchClass = new ClassroomDatabase()
            const result = await searchClass.searchClassrooms(searchModule)
 
            res.status(200).send({message: "Classrooms actives",classrooms: result})  
              
          
        } catch (error) {
            res.status(erroCode).send({message: error.message})
        }
    }
}