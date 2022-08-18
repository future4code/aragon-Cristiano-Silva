import { BaseError } from './../../src/errors/BaseError';
import { UserBusiness } from "../../src/business/UserBusiness"
import { ILoginInputDTO } from "../../src/models/User"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Testando UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("login bem sucedido", async () => {
        const input: ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)

        expect(response.message).toEqual("Login realizado com sucesso")
        expect(response.token).toEqual("token-astrodev")
    })

    test("deve retornar erro caso a senha seja inválida", async () =>{
       expect.assertions(2)

        try {
            const input: ILoginInputDTO = {
                email: "astrodev@gmail.com",
                password: "baaninha"
            }

            await userBusiness.login(input)
        } catch (error: unknown) {
            if (error instanceof BaseError){
                expect(error.statusCode).toEqual(401)
                expect(error.message).toEqual("Password incorreto")
            }
            
        }
    })

    test("deve retornar erro caso email seja inválido", async() =>{
       expect.assertions(1)

        try {
            const input: ILoginInputDTO = {
                email: undefined,
                password: "bananinha"
            } as unknown as ILoginInputDTO

            await userBusiness.login(input)            
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.statusCode).toEqual(400)
            }
            
        }
    })
})