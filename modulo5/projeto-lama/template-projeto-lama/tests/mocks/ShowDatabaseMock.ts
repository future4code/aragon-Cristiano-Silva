import { Show, IShowDB } from './../../src/models/Show';
import { BaseDatabase } from "../../src/database/BaseDatabase"

export class ShowDatabaseMock extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_shows"
    public static TABLE_TICKETS  = "Lama_tickets"

    public toShowDBModel = (show: Show) =>{
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }

        return showDB
    }

    public createShow = async(show: Show) =>{

    }

    public getShows = async () =>{
        const shows: IShowDB[] = [
            {
                id: "201",
                band: "Foo Fighters",
                starts_at: new Date("2022/12/05")
            },
            {
                id: "202",
                band: "System of a Down",
                starts_at: new Date("2022/12/06")
            },
            {
                id: "203",
                band: "Evanescence",
                starts_at: new Date("2022/12/07")
            },
        ]

        return shows
        
    }

}