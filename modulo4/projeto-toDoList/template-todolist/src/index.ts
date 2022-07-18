import express, { Request, Response } from "express";
import cors from "cors";
import { ping } from "./endpoints/ping";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});

// Endpoint com o callback vindo por import da pasta endpoints
app.get("/ping", ping)

// Siga o exemplo do ping acima e monte seus endpoints abaixo!


//1. Get users
app.get("/users", async(req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const search = req.query.search as string

    if(search){
      const [result] = await connection.raw(`
      SELECT * FROM Users
      WHERE LOWER(name) LIKE "%${search.toLowerCase()}%";
      `)
      return res.status(200).send({users: result, message:"User selected successfully!"})
    }
    

    const [ result ]= await connection.raw(`
      SELECT * FROM Users;
    `)
    res.status(200).send({users: result, message:"Lista de usuários"})

    

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

//2. Get tasks
app.get("/tasks", async (req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const search = req.query.search as string

    if(search) {
      const [result] = await connection.raw(`
      SELECT * FROM Tasks
      WHERE LOWER(title) LIKE "%${search.toLowerCase()}%"
      `)
      return res.status(200).send({tasks:result,message:"task selected successfully!"})
    }

    const [result] = await connection.raw(`
    SELECT * FROM Tasks    `)

    res.status(200).send({tasks: result, message:"Lista de Tarefas"})
    
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

//3. Get tasks by id
app.get("/tasks/:taskId/users", async(req:Request, res:Response)=>{
  let erroCode = 400

  try {
    const taskId = req.params.taskId

    const [taskExist] = await connection.raw(`
    SELECT * FROM Tasks
    WHERE id = ${taskId}
    `)

    if(!taskExist[0]){
      erroCode = 422
      throw new Error("non-existent  id");
      
    }

    const  [tasks] = await connection.raw(`
    SELECT 
    id, nickname
    FROM Users
    JOIN Responsibles
    ON Responsibles.userId = Users.id
    WHERE Responsibles.taskId = ${taskId}

    `)
    res.status(200).send({tasks:tasks,message:"Lista de tarefas"})

    
  } catch (error) {
    res.status(erroCode).send({message: error.message})
  }
})

//4. Post 
app.post("/tasks/:taskId/users",async (req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const taskId = req.params.taskId
    const userId = req.body.userId 

    const {title, name} = await connection.raw(`
    SELECT title FROM Tasks && SELECT name FROM Users
    WHERE id = ${taskId} && WHERE id ${userId}

    `)

    const newTask = {
      taskId:taskId,
      userId:userId
    }
   
    await connection.raw(`
    INSERT INTO Responsibles (taskId, userId)
    VALUES ("${newTask.taskId}", "${newTask.userId}")
    `)
    res.status(201).send({message: "New task for user successfully",news:newTask,user:name[0].name,tarefa:title[0].title})

    
  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
})

//5. Put 
app.put("/users/:userId", async (req:Request, res:Response)=>{
  let errorCode = 400

  try {
    const userId = req.params.userId
    const nickname = req.body.nickname

    await connection.raw(`
    UPDATE Users
    SET nickname = "${nickname}"
    WHERE id = ${userId}
    `)
    res.status(200).send({message:"nickname successfully updated"})


  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
})

//6. Put
app.put("/tasks/:taskId", async(req:Request, res:Response)=>{
  let errorCode = 400

  try {
    const taskId = req.params.taskId
    const status = req.body.status

    if(!status){
      errorCode = 404
      throw new Error("Not Found");      
    }
   
    if(status !== "TO_DO" || status !== "DONE" || status !=="DOING"){
      errorCode = 406
      throw new Error("Not Acceptable");
      
    }

    await connection.raw(`
    UPDATE Tasks
    SET status = "${status}"
    WHERE id = "${taskId}"
    `)
    res.status(200).send({message:"status changed successfully"})

    
  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }
}) 

//7 Delete
app.delete("/tasks/:taskId", async (req:Request, res:Response)=>{
  let errorCode = 400

  try {

    const taskId = req.params.taskId
    const id = req.body.id

    if(!taskId){
      errorCode = 404
      throw new Error("Not Found");      
    }

    await connection.raw(`
    DELETE FROM Responsibles
    WHERE taskId = ${taskId}
    `)

    await connection.raw(`
    DELETE FROM Tasks
    WHERE id = ${id}
    `)
    res.status(200).send({message: "User successfully deleted"})

  } catch (error) {
    res.status(errorCode).send({message:error.message})
  }

})