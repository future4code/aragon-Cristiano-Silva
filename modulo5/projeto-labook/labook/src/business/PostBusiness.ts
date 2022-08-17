import { PostDatabase } from './../database/PostDatabase';
import { ITokenPayload } from './../services/Authenticator';
import { INewpostDTO, ILikeDB, Post, IPostDB, IGetPostsInputDTO, IGetPostsDBDTO, IGetPostsPost, IGetPostsOutputDTO, IDeletePostInputDTO, INewLikeDTO, ILikeDBDTO } from './../models/Post';
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { USER_ROLES } from '../models/User';

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public newpost = async (input: INewpostDTO) =>{
      
        const {token, content} = input
        
        if(!token ){
            throw new Error("Parâmetro faltando")
        }
        if( !content){
            throw new Error("Parâmetro faltando")
        }
        if(typeof content !== "string"){
            throw new Error("Parâmetro content inválido")
        }

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new Error("token invalido")
        }

        const postDB: IPostDB = {
            id: this.idGenerator.generate(),
            content: content,
            user_id: payload.id
        }

        await this.postDatabase.createPost(postDB)
        const post = new Post(
            postDB.id,
            postDB.content,
            postDB.user_id
        )
        const response ={
            message: "Post created successfully",
            post
        }
        return response

      
    }

    public getPosts = async (input: IGetPostsInputDTO) =>{
        const token = input.token 
        const search = input.search 

        const payload = this.authenticator.getTokenPayload(token)

        if(!payload){
            throw new Error(`No token found`)
        }

        const getPostsInputDB: IGetPostsDBDTO = {
            search
        }

        const postsDB = await this.postDatabase.getPosts(getPostsInputDB)

        const posts = postsDB.map(postDB => {
            const post = new Post (
                postDB.id,
                postDB.content,
                postDB.user_id,
            )

            const postResult: IGetPostsPost = {
                id:post.getId(),
                content: post.getContent(),
                user_id: post.getUserId(),
                likes: post.getLikes()
            }

            return postResult
        })

        const result: IGetPostsOutputDTO ={
            posts
        }

        return result
    }

    public newlike = async (input: INewLikeDTO) =>{
        const {token,id} = input
       
        const payload = this.authenticator.getTokenPayload(token)
        
        if(!payload){
            throw new Error("token invalido");
        } 

        const searchPost = await this.postDatabase.findById(id)

        if(!searchPost){
            throw new Error("Post not found");  
        }

       

        const postId = this.idGenerator.generate()

        const likeDB: ILikeDB = {
            id: postId,
            post_id: id,
            user_id: payload.id         
        }

        await this.postDatabase.addLike(likeDB)
     
        const result = {
            message: "new like successfully",
        }
        return result
    }

    public deletePost = async (input: IDeletePostInputDTO) =>{
        const token = input.token 
        const id = input.id             

        const payload = this.authenticator.getTokenPayload(token)

        if (!payload) {
            throw new Error("Token inválido ou faltando")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            throw new Error("Apenas admins podem deletar usuários")
        }

        if (payload.id === id) {
            throw new Error("Não é possível deletar a própria conta")
        }

        const userDB = await this.postDatabase.findById(id)

        if (!userDB) {
            throw new Error("Usuário a ser deletado não encontrado")
        }

        await this.postDatabase.deletePost(id)

        const result = {
            message: "post deleted successfully"
        }

        return result
    }

    public desLike = async(input: INewLikeDTO) => {
        const {token, id} = input

        if (!token) {
            throw new Error("Missing Token");
        }

        if (!id) {
            throw new Error("Missing postId");
        }

        const payload = this.authenticator.getTokenPayload(token);

        if (!payload) {
            throw new Error("Invalid Token");
        }

        const postDB = await this.postDatabase.findById(id);

        if (!postDB) {
            throw new Error("Post not found");
        }

        const userId = payload.id;
        const likeDB = await this.postDatabase.findById(id);

        if (!likeDB) {
            throw new Error("You haven't liked this post");
        }

        const dislike = {
            post_id: id,
            user_id: userId
        }

        await this.postDatabase.deslikePost(dislike);

        const response = {
            message: "Post disliked successfully"
        }

        return response;
    }
    
}