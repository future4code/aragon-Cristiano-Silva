import { BaseError } from './../errors/BaseError';
import { ISignupInputDTO, ILoginInputDTO } from './../models/User';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const input: ISignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.signup(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }else if  (error instanceof Error){
                return res.status(500).send({ message: error.message})
            }

            res.status(500).send({ message: "Erro inesperado ao cadastrar usuário"})
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: ILoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const response = await this.userBusiness.login(input)
            res.status(201).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }

            res.status(500).send({ message: "Erro inesperado ao logar usuário" })
        }
    }
}
   
