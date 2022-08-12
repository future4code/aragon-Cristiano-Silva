import { Authenticator, ITokenPayload } from './../services/Authenticator';
import { User, IUserDB } from './../models/User';
import { UserDatabase } from './../database/UserDatabase';
import { IdGenerator } from './../services/IdGenerator';
import { Request, Response } from 'express';
import { BaseDatabase } from '../database/BaseDatabase';


export class UserController {
    public signup = async (req:Request, res: Response) =>{
        let errorCode = 400
        
        try {
            const nickname = req.body.nickname
            const email = req.body.email
            const password = req.body.password
        
            if (!nickname || !email || !password) {
                throw new Error("missing parameters")
            }

            if(typeof nickname !== 'string' || typeof email !== 'string') {
                throw new Error(" invalid parameters")
            }    

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const user = new User(
                id,
                nickname,
                email,
                password
            )

            const userDatabase = new UserDatabase()
            await userDatabase.createUser(user)

            const payload: ITokenPayload = {
                id: user.getId(),
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(201).send({
                message: "Successfully registered",
                token
            })            
        } catch (error) {
            if(
                typeof error.message === "string" && 
                error.message.includes("Duplicate entry")
            ){
                return res.status(500).send("Email already taken")
            }
            res.status(errorCode).send({message: error.message})
        }
    }

    public login = async (req:Request, res:Response) =>{
        let errorCode = 400

        try {
            const email = req.body.email 
            const password = req.body.password

            if (!email || !password){
                errorCode = 401
                throw new Error("Email or password missing")
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.findByEmail(email)

            if(!userDB){
                errorCode = 401
                throw new Error("Email not registered")
            }

            const user = new User(
                userDB.id,
                userDB.nickname,
                userDB.email,
                userDB.password
            )

            if(user.getPassword() !== password){
                errorCode = 401
                throw new Error("password is incorrect");
            }

            const payload: ITokenPayload = {
                id: user.getId()
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken(payload)

            res.status(200).send({
                message: "Login successfully done!",
                token
            })             
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }   
    }

   public getAllUsers = async (req:Request, res:Response) =>{
        let errorCode = 400

        try {
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            if(!payload){
                errorCode = 401
                throw new Error("missing or invalid token")
            }

            const userDatabase = new UserDatabase()
            const userDB = await userDatabase.getAllUsers()

            const users = userDB.map((user) =>{
                return new User(
                    user.id,
                    user.nickname,
                    user.email,
                    user.password
                )
            })

            res.status(200).send({users})            
        } catch (error) {
            res.status(errorCode).send({mesage: error.message})
        }
   }

   public  updateUser = async (req:Request, res:Response) =>{
    let errorCode = 400

    try {
        const {nickname,email, password} = req.body 
        const token = req.headers.authorization

        const authenticator = new Authenticator()
        const payload = authenticator.getTokenPayload(token)

        const userDatabase = new UserDatabase()
        const upDateDB = await userDatabase.updateUser(payload.id,nickname, email, password)

  

        res.status(200).send({message:"Updated user sucessfully",user: upDateDB})

        
    } catch (error) {
        res.status(errorCode).send({mesage: error.message})
    }
   }

   public deletUser = async (req: Request, res: Response) =>{
        let errorCode = 400

        try {
            const token = req.headers.authorization

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

            const userDatabase = new UserDatabase()
            const deleteDB = await userDatabase.deletUser(payload.id)

            res.status(200).send({message:"delete sucessfully",user:deleteDB})


        } catch (error) {
            res.status(errorCode).send({mesage: error.message})
        }
   }
}