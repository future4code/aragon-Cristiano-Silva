import { User, IUserDB } from './../models/User';
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    public createUser = async (user: User) =>{
        const userDB : IUserDB = {
            id:user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await BaseDatabase 
        .connection(UserDatabase.TABLE_USERS)
        .insert(userDB)
    }

    public findById = async (id: string) =>{
        const result : IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({id})

        return result[0]    
    }

    public findByEmail = async (email: string) =>{
        const result : IUserDB[] = await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .select()
            .where({email})

        return result[0]    
    }

    public getUsers = async (
        search: string,
      
    ) =>{
        const userDB: IUserDB[] = await BaseDatabase 
        .connection(UserDatabase.TABLE_USERS)
        .select()
        .where(`name`, "LIKE", `%${search}%`)

        return userDB

    }

    public deleteUserById = async (id: string) =>{
        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .delete()
            .where({id})
    }




}