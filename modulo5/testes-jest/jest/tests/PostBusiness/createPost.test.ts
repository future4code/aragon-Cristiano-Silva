import { ICreatePostInputDTO } from './../../src/models/Post';
import { PostDatabase } from './../../src/database/PostDatabase';
import { AuthenticatorMock } from './../mocks/services/AuthenticatorMock';
import { HashManagerMock } from './../mocks/services/HashManagerMock';
import { IdGeneratorMock } from './../mocks/services/IdGeneratorMock';
import { PostBusiness } from './../../src/business/PostBusiness';
import { PostDatabaseMock } from './../mocks/PostDatabaseMock';


describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test('createPost bem sucedido', async () =>{
        const input: ICreatePostInputDTO = {
            token: "token-mock",
            content: "Topadissimo post"
        }

        const response = await postBusiness.createPost(input)

        expect(response.message).toEqual("Post criado com sucesso")        
    })

 
}) 