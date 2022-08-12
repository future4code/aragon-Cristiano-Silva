import { UserController } from './../controller/UserController';
import { UserBusiness } from './../business/UserBusiness';
import { Router } from 'express'
import { UserDatabase } from '../database/UserDatabase';
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager';
import { Authenticator } from '../services/Authenticator';

export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)




