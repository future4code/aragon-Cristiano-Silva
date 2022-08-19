import { UnauthorizedError } from './../errors/UnauthorizedError';
import { RequestError } from './../errors/RequestError';
import { ICreateShowInputDTO, Show, ICreateShowOutputDTO, IGetShowInputDTO, IGetShowOutputDTO, IReserveTicketInputDTO, IShowDB, ITicketDB, IReserveTicketOutputDTO, IDeleteTicketInputDTO, IDeleteTicketOutputDTO } from './../models/Show';
import { ShowDatabase } from "../database/ShowDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { BaseDatabase } from '../database/BaseDatabase';

export class ShowBusiness {
    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public createShow = async (input: ICreateShowInputDTO) =>{
        const {token, band,starts_at} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        if (typeof band !== "string") {
            throw new RequestError("Parâmetro 'content' inválido")
        }

        if (band.length < 1) {
            throw new RequestError("Parâmetro 'content' inválido: mínimo de 1 caracteres")
        }

        const id = this.idGenerator.generate()

        const show = new Show(
            id,
            band,
            starts_at,
            
        )

        await this.showDatabase.createShow(show)

        const response: ICreateShowOutputDTO ={
            message: "Show Criado com sucesso",
            show
        }

        return response
    }

    public getShows = async (input: IGetShowInputDTO) =>{
        const {token} = input 

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showsDB = await this.showDatabase.getShows()

        const shows = showsDB.map(showDB =>{
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })

        for (let show of shows){
            const showId = show.getId()
            const tickets = await this.showDatabase.getTickets(showId)
            show.setTickets(tickets)
        }

        const response: IGetShowOutputDTO ={
            shows
        }
        return response
    }

    public reserveTicket = async (input: IReserveTicketInputDTO) => {
        const {token, showId} = input

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new RequestError("Post não encontrado")
        }

        const alreadyBook = await this.showDatabase.findTickets(
            showId,
            payload.id
        )

        if (alreadyBook) {
            throw new RequestError("Ticket já reservado")
        }

        const ticketDB: ITicketDB ={
            id: this.idGenerator.generate(),
            show_id: showId,
            user_id: payload.id
        }

        await this.showDatabase.newTicket(ticketDB)

        const response: IReserveTicketOutputDTO ={
            message: "compra de novo ticket reservado com sucesso"
        }

        return response
    }

    public deleteTickets = async (input: IDeleteTicketInputDTO) => {
        const { token, showId} = input 

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new UnauthorizedError("Não autenticado")
        }

        const showDB = await this.showDatabase.findShowById(showId)

        if (!showDB) {
            throw new RequestError("Post não encontrado")
        }

        const alreadyBook = await this.showDatabase.findTickets(
            showId,
            payload.id
        )

        if (!alreadyBook) {
            throw new RequestError("Nenhum ticket reservado até o momento.")
        }

        await this.showDatabase.deleteTicket(showId,payload.id)

        const response: IDeleteTicketOutputDTO ={
            message: "Ticket deletado com sucesso"
        }

        return response
    }
     
}