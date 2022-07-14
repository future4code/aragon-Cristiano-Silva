import { Dados } from './types';
import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

//Get usuarios
app.get("/usuarios", async (req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const busca = req.query.busca as string

    if(busca){
      const [resultado] = await connection.raw(`
      SELECT * FROM Usuarios
      WHERE LOWER(nome) LIKE "%${busca.toLowerCase()}%";
      `)
      return res.status(200).send({usuarios: resultado})
    }

    const [resultado] = await connection.raw(`
    SELECT * FROM Usuarios;
    `)

    res.status(200).send({usuarios: resultado})    
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }

})

//Post
app.post("/usuarios", async (req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const {nome, email} = req.body 

    if(!nome || !email){
      errorCode = 400
      throw new Error("Parâmetros faltando");      
    }
    if(typeof nome !== "string" || typeof email !== "string"){ 
      errorCode = 422
      throw new Error("Parâmetros de email e nome devem ser do tipo string");      
    }

    if(nome.length <4){
      errorCode = 404
      throw new Error("Caracteres deven ser maior que 4");
      
    }
  
    if(email.includes("@")){
      errorCode =400
      throw new Error("Faltando parâmetro @");
    }

    const novoUsuario: Dados ={
      id: Date.now(),
      nome:nome,
      email:email
    }

    await connection.raw(`
    INSERT INTO Usuarios (id,nome,email)
    VALUES (${novoUsuario.id}, "${novoUsuario.nome}", "${novoUsuario.email}")
    `)    
    res.status(201).send({message: "Usuário cadastrado com sucesso!",usuarios:novoUsuario})

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})


//Put editar email de determinado usuario

app.put("/usuarios/:id", async(req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const id = Number(req.params.id)
    const email = req.body.email

    if(!id){
      errorCode = 422
      throw new Error("Id de usuário invalido!");
      
    }

    if(!email){
      errorCode = 422
      throw new Error("Parâmetro faltando");
      
    }

     if(typeof email !== "string" ){
      errorCode = 422
      throw new Error("Parâmetro não pode ser diferente de string");
    } 
    if(!email.includes("@")){
      errorCode =400
      throw new Error("Faltando parâmetro @");
    }

    await connection.raw(`
    UPDATE Usuarios
    SET email = "${email}"
    WHERE id = ${id}
    `)
    
    res.status(200).send({message: "Email atualizado com sucesso!"})

  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})



//Delete Usuario
app.delete("/usuarios/:id", async(req:Request, res:Response) =>{
  let errorCode = 400

  try {
    const id = Number(req.params.id)

    const [usuarios] = await connection.raw(`
    SELECT * FROM Usuarios
    WHERE id = ${id}
    `)

    const usuarioEncontrado = usuarios[0]

    if(!usuarioEncontrado) {
      errorCode = 404
      throw new Error("Usuário não encontrado");
      
    }

    await connection.raw(`
    DELETE FROM Usuarios
    WHERE id = ${id}
    `)

    res.status(200).send({message: "Usuário deletado com sucesso!"})
  } catch (error) {
    res.status(errorCode).send({message: error.message})
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});