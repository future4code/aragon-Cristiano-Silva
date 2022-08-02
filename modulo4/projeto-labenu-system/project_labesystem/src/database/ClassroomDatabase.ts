import { IClassroomDB } from './../models/Classroom';
import { BaseDatabase } from "./BaseDatabase"

export class ClassroomDatabase extends BaseDatabase {
    [x: string]: any;
    public static TABLE_CLASSROOMS = "Labe_Classrooms"
    static module: number;

    public async getAllClassrooms() {
        const result = await BaseDatabase
            .connection(ClassroomDatabase.TABLE_CLASSROOMS)
            .select()
            
        return result
    }

    public async createClass(classrooms: IClassroomDB){
        await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .insert(classrooms)        
    }
    
    public async searchClassrooms(module:string){
        const result = await BaseDatabase  
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .select(module)
        .where("module","!=","0");
        
        return result
    }

    public async updateClassrooms(id:string,module:string ){
         await BaseDatabase
        .connection(ClassroomDatabase.TABLE_CLASSROOMS)
        .update({module})
        .where({id})
    }

}
