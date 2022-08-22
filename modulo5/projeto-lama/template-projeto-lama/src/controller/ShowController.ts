import { BaseError } from './../errors/BaseError';
import { ICreateShowInputDTO, IGetShowInputDTO, IReserveTicketInputDTO, IDeleteTicketInputDTO } from './../models/Show';
import { Request, response, Response } from "express"; 
import { ShowBusiness } from "../business/ShowBusiness";
import { request } from 'http';

export class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public createShow = async (req: Request, res: Response) =>{
        try {
            const input: ICreateShowInputDTO = {
                token: req.headers.authorization,
                band: req.body.band,
                starts_at: new Date()
            }

            const response = await this.showBusiness.createShow(input)
            res.status(201).send(response)
        } catch (error) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({message: "Erro inesperado ao criar post"})
            
        }
    }

    public getShows = async (req: Request, res: Response) =>{
        try {
            const input: IGetShowInputDTO = {
                token: req.headers.authorization
            }

            const response = await this.showBusiness.getShows(input)
            res.status(200).send(response)
            
        } catch (error: unknown) {
            if(error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})

            }
            res.status(500).send({message: "Erro inesperado ao buscar shows"})
        }
    }

    public reverseTicket = async(req: Request, res: Response) =>{
        try {
            const input: IReserveTicketInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.reserveTicket(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if( error instanceof BaseError){
                return res.status(error.statusCode).send({message: error.message})
            }

            res.status(500).send({ message: "Erro inesperado ao dar like post"})
        }
    }

    public deleteTicket = async (req:Request, res: Response) => {
        try {
            const input: IDeleteTicketInputDTO = {
                token: req.headers.authorization,
                showId: req.params.id
            }

            const response = await this.showBusiness.deleteTickets(input)
            res.status(200).send(response)
        } catch (error: unknown) {
            if (error instanceof BaseError){
                return res.status(error.statusCode).send({ message: error.message})
            }

            res.status(500).send({ message:"Erro inesperado ao deletar ticket" })
            
        }
    }
 
}