import { UserBusiness } from './../business/UserBusiness';
import { Request, Response } from "express";
import { request } from 'http';


export class UserController {
    public signup = async (req:Request, res:Response) => {
        
        try {
            const userBusinesss = new UserBusiness();
            const response = await userBusinesss.signup({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })

            res.status(201).send(response)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    public login = async (req:Request, res:Response ) => {
        try {
            const userBusinesss = new UserBusiness();
            const response = await userBusinesss.login({
                email: req.body.email,
                password: req.body.password
            })

        res.status(200).send({message:"Login realizado com sucesso", response:response})
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    public getAllUsers = async (req:Request, res:Response) => {
        try {

            const userBusiness = new UserBusiness()
            const response = await userBusiness.getAllUsers({
                token: req.headers.authorization,
                search: req.query.search,
            
            })

            res.status(200).send(response)
            
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    public deleteUser = async (req:Request, res:Response) =>{

        try {
            const userBusiness = new UserBusiness()
            const response = await userBusiness.deleteUser({
                token: req.headers.authorization,
                id: req.params.id
            })

            res.status(200).send(response)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}