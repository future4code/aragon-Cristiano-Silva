import { PostDatabase } from './../database/PostDatabase';
import { PostController } from './../controller/PostController';
import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

postRouter.post("/",postController.newpost)
postRouter.get("/",postController.getPosts)
postRouter.delete("/:id",postController.deletePost)
postRouter.post("/like",postController.newlike)