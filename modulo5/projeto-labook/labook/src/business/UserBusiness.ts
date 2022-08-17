import { ITokenPayload } from './../services/Authenticator';
import { ISignupInputDTO, User, USER_ROLES, ILoginInputDTO } from './../models/User';
import { UserDatabase } from "../database/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignupInputDTO) =>{
        const name = input.name
        const email = input.email
        const password = input.password
    

    if (!name || !email || !password) {
        throw new Error("Um ou mais parâmetros faltando")
    }

    if (typeof name !== "string" || name.length < 3) {
        throw new Error("Parâmetro 'name' inválido")
    }

    if (typeof email !== "string" || email.length < 3) {
        throw new Error("Parâmetro 'email' inválido")
    }

    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        throw new Error("Parâmetro 'email' inválido")
    }

    if (typeof password !== "string" || password.length < 3) {
        throw new Error("Parâmetro 'password' inválido")
    }

    const id = this.idGenerator.generate()
    const hashedPassword = await this.hashManager.hash(password)

    const user = new User(
        id,
        name,
        email,
        hashedPassword,
        USER_ROLES.NORMAL
    )

    await this.userDatabase.createUser(user)

    const payload: ITokenPayload = {
        id: user.getId(),
        role: user.getRole()
    }

    const token = this.authenticator.generateToken(payload)

    const result = {
        message: "user registered successfully",
        token
    }

    return result
}

    public login = async (input: ILoginInputDTO) =>{
        console.log("business")
        const email = input.email
        const password = input.password

        const userDB = await this.userDatabase.findByEmail(email)

        if (!userDB){
            throw new Error("Email not found");            
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        ) 

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const result = {
            message: "login successfully",
            token
        }

        return result
    }

}