import { IStudentDB } from './../models/Student';
import { BaseDatabase } from "./BaseDatabase"

export class StudentDatabase extends BaseDatabase {  
    public static TABLE_STUDENTS = "Labe_Students"
    public static TABLE_HOBBIES = "Labe_Hobbies"
    public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies"

    public async createStud(student: IStudentDB){
        await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .insert(student)
    }

    public async getStudent(name:string){
        const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select()
        .where("name",name)

        return result
    }

    public async updateRegistration(id:string,classroom_id:string){
        await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .update({classroom_id})
        .where({id})
    }

    public async getStudentByClassroom(classroom_id:string){
        const result = await BaseDatabase
        .connection(StudentDatabase.TABLE_STUDENTS)
        .select('id','name','email')
        .where("classroom_id", classroom_id, )
     
        return result
    }


}


