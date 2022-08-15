import { ISignupInputDTO } from './../../src/models/User';
import { UserBusiness } from "../../src/business/UserBusiness"
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

    // implemente seu teste aqui

    test("signup bem sucedido", async () =>{
        const input: ISignupInputDTO ={
            name: 'criz1',
            email: 'criz1@gmail.com',
            password: 'criz123'
        }

        const result = await userBusiness.signup(input)

        expect(result.message).toEqual("Cadastro realizado com sucesso")
        expect(result.token).toEqual("token-mock")
    })
})