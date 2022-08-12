import { ITokenPayload } from './../services/Authenticator';
import { INewpostDTO, IGetPostsInputDTO, IDeletePostInputDTO, INewLikeDTO } from './../models/Post';
import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public newpost = async (req:Request, res:Response) =>{
        try {
   
            const input: INewpostDTO ={
                token: req.headers.authorization,
                content: req.body.content                
            }

            const result = await this.postBusiness.newpost(input)

            res.status(201).send(result)
        } catch (error) {
            res.status(400).send({message:error.message})
        }
    }

    public newlike = async (req:Request, res:Response) =>{
        try{     
            const input : INewLikeDTO ={
                token:req.headers.authorization,
                post_id: req.body.post_id,
                user_id:req.body.user_id
            }

            const result = await this.postBusiness.newlike(input)


            res.status(201).send(result)
        }catch(error){
            res.status(400).send({message:error.message})
        }
    }

    public getPosts = async (req:Request, res:Response) =>{
        try {
            const input: IGetPostsInputDTO ={
                token: req.headers.authorization,
                search: req.query.search as string
            }
            
            const result = await this.postBusiness.getPosts(input)

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }

    public deletePost = async (req:Request, res: Response) =>{
        try {

            const input: IDeletePostInputDTO = {
                token: req.headers.authorization,
                id: req.params.id
            }

            const result = await this.postBusiness.deletePost(input)
            
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }

}