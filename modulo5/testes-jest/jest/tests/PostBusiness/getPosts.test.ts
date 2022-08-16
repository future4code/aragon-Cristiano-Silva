import { PostBusiness } from './../../src/business/PostBusiness';
import { IGetPostsInputDTO } from './../../src/models/Post';
import { PostDatabase } from './../../src/database/PostDatabase';
import { PostDatabaseMock } from './../mocks/PostDatabaseMock';
import { IdGeneratorMock } from './../mocks/services/IdGeneratorMock';
import { HashManagerMock } from './../mocks/services/HashManagerMock';
import { AuthenticatorMock } from './../mocks/services/AuthenticatorMock';



describe("Testando PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock() as unknown as PostDatabase ,
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("getPosts bem sucedido", async () =>{
        const input:IGetPostsInputDTO = {
            token: "token-astrodev"
        }

        const result = await postBusiness.getPosts(input)

        expect(result.posts.length).toEqual(3)
        expect(result.posts[0].getId()).toEqual("201")
        expect(result.posts[0].getContent()).toEqual("Olá, sou novo por aqui!")
        expect(result.posts[0].getUserId()).toEqual("101")
    })

})