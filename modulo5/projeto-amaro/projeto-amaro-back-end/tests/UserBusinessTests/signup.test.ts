import { UserBusiness } from "../../src/business/UserBusiness"
import { ISignupInputDTO } from "../../src/models/User"
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock"
import { HashManagerMock } from "../mocks/services/HashManagerMock"
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { BaseError } from "../../src/errors/BaseError"


describe("Testando signup da UserBusiness", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("Caso de sucesso", async () => {
        const input: ISignupInputDTO = {
            name: "alice",
            email: "alice@gmail.com",
            password: "alice99"
        }

        const result = await userBusiness.signup(input)

        expect(result.message).toEqual("registration successful")
        expect(result.token).toEqual("token-mock")
    })

    test("Erro ao se cadastrar com email já registrado", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "astrodev",
                email: "astrodev@gmail.com",
                password: "bananinha"
            }
    
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("E-mail already registered")
                expect(error.statusCode).toEqual(409)
            }
        }
    })

    test("Invalid password parameter minimum of 6 characters", async () => {
        expect.assertions(2)
        try {
            const input: ISignupInputDTO = {
                name: "alice",
                email: "alice@gmail.com",
                password: "abc12"
            }
    
            await userBusiness.signup(input)
        } catch (error) {
            if (error instanceof BaseError) {
                expect(error.message).toEqual("Invalid password parameter minimum of 6 characters")
                expect(error.statusCode).toEqual(400)
            }
        }
    })
})