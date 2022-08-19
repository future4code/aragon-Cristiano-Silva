import { ICreateShowInputDTO } from './../../src/models/Show';
import { ShowDatabaseMock } from './../mocks/ShowDatabaseMock';
import { ShowBusiness } from './../../src/business/ShowBusiness';
import { AuthenticatorMock } from './../mocks/services/AuthenticatorMock';
import { HashManagerMock } from './../mocks/services/HashManagerMock';
import { IdGeneratorMock } from './../mocks/services/IdGeneratorMock';


describe("Testando ShowBusiness", () =>{
    const showBusiness = new ShowBusiness(
        new ShowDatabaseMock() as unknown as any, 
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

 /*    test("createShow bem sucedido", async () =>{
        const input: ICreateShowInputDTO ={
            token: "token-astrodev",
            band: "Sorriso maroto",
            starts_at: Date.now()
        }

        const response = await showBusiness.createShow(input)

        expect(response.message).toEqual("Show criado com sucesso")
        expect(response.show.getId()).toEqual("id-mock")
        expect(response.show.getBand()).toEqual("Sorriso maroto")
    }) */

})