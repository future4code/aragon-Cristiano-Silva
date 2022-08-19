import { IGetShowInputDTO } from './../../src/models/Show';
import { HashManagerMock } from './../mocks/services/HashManagerMock';
import { ShowDatabaseMock } from './../mocks/ShowDatabaseMock';
import { ShowBusiness } from './../../src/business/ShowBusiness';
import { IdGeneratorMock } from '../mocks/services/IdGeneratorMock';
import { AuthenticatorMock } from '../mocks/services/AuthenticatorMock';


describe("Testando ShowBubbles", () => {
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as any,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("getShows bem sucedido ", async () =>{
        const input: IGetShowInputDTO = {
            token: "token-astrodev"
        }

        const response = await showBusiness.getShows(input)

        expect(response.shows.length).toEqual(3)
    })
})
