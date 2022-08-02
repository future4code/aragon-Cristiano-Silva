import { GetStudentByClass } from './endpoints/GetStudentByClass';
import { UpDateStudentRegistr } from './endpoints/UpDateStudentRegistr';
import { UpDateClassrooms } from './endpoints/UpDateClassrooms';
import { SearchClassroom } from './endpoints/SearchClassroom';
import { GetStudents } from './endpoints/GetStudentsByName';
import { CreateStudent } from './endpoints/CreateStudent';
import { CreateClassroom } from './endpoints/CreateClassroom';
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PingController } from './endpoints/PingController'
import { ClassroomController } from './endpoints/ClassroomController'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

const pingController = new PingController()
const classroomController = new ClassroomController()
const createClassroomController = new CreateClassroom()
const createStudentController = new CreateStudent()
const getStudent = new GetStudents()
const getActive = new SearchClassroom()
const updateClass = new UpDateClassrooms()
const updateReg = new UpDateStudentRegistr()
const getByClassByStudent = new GetStudentByClass()

app.get("/ping", pingController.ping)
app.get("/classrooms", classroomController.getAllClassrooms)
app.post("/classrooms", createClassroomController.createClass)
app.post("/students",createStudentController.createStud)
app.get("/students", getStudent.student)
app.get("/classrooms/actives", getActive.search)
app.put("/classrooms/:id", updateClass.updateClass)
app.put("/students/:id",updateReg.upDate)
app.get("/students/classroomid",getByClassByStudent.getByStudClass)
