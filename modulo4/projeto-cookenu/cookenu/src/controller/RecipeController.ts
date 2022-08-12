import { IRecipeDB } from './../models/Recipe';
import { Request, Response } from "express";
import { RecipeDatabase } from "../database/RecipeDatabase";
import { Recipe } from "../models/Recipe";
import { Authenticator } from "../services/Authenticator";
import { USER_ROLES } from '../models/User';

export class RecipeController {
    public getAllRecipes = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const token = req.headers.authorization
            const search = req.query.search

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

           
            if (!payload) {
                errorCode = 401
                throw new Error("Token inválido")
            } 

            if (typeof search !== "string"){
                throw new Error("Parâmetro 'search' deve ser uma string")
            }

            const recipeDatabase = new RecipeDatabase()
            const recipesDB = await recipeDatabase.getAllRecipes(search)

            const recipes = recipesDB.map((recipeDB) => {
                return new Recipe(
                    recipeDB.id,
                    recipeDB.title,
                    recipeDB.description,
                    recipeDB.created_at,
                    recipeDB.updated_at,
                    recipeDB.creator_id
                )
            })

            const result = recipes.map((recipe) =>{
                return {
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                }
            })

            res.status(200).send({ recipes: result })
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public createdRecipe = async (req:Request, res: Response) =>{
        let errorCode = 400

        try {
            const token = req.headers.authorization

            if (!token) {
                errorCode = 401
                throw new Error("Token faltando")
            }

            const title = req.body.title 
            const description = req.body.description
            const creator_id = req.body.creator_id

            if (!title || !description){
                errorCode = 401
                throw new Error("Token faltando ou inválido")
            }

            if (typeof title !== "string"){
                throw new Error("Parâmetro 'search' deve ser uma string")
            }
        
            if (typeof description !== "string"){
                throw new Error("Parâmetro 'search' deve ser uma string")
            }

            if (title.length < 3){
                throw new Error("O parâmetro title deve possuir ao menos 03 caracteres")
            }

            if (description.length < 10){
            throw new Error("O parâmetro description deve possuir ao menos 10 caracteres")
            } 
                      
            const recipe : IRecipeDB ={
                id: Date.now().toString(),
                title,
                description,
                created_at: new Date(),
                updated_at: new Date(),
                creator_id : creator_id
            }

            const createdDatabase = new RecipeDatabase()
            await createdDatabase.createdRecipes(recipe)


            res.status(201).send({message: "Recifes created successfully", recipes: recipe})
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }

    public editRecipe = async (req: Request, res: Response) =>{
        let errorCode = 400

        try {
                const token = req.headers.authorization

                const id = req.params.id 
                const title = req.body.title 
                const description = req.body.description

                const authenticator = new Authenticator()
                const payload = authenticator.getTokenPayload(token)

             
                 if (!token) {
                    errorCode = 401
                    throw new Error("Token faltando")
                }            

                if(!id){
                    errorCode = 401
                    throw new Error("ID faltando")
                }

                if (typeof title !== "string"){
                    throw new Error("Parâmetro 'search' deve ser uma string")
                }
            
                if (typeof description !== "string"){
                    throw new Error("Parâmetro 'search' deve ser uma string")
                }
    
                if (title.length < 3){
                    throw new Error("O parâmetro title deve possuir ao menos 03 caracteres")
                }
    
                if (description.length < 10){
                throw new Error("O parâmetro description deve possuir ao menos 10 caracteres")
                } 
                
                const edit = new RecipeDatabase()
                const result = await edit.updatedRecipes(id,title, description)


            res.status(201).send({message: "Recifes edit successfully",recipes:result})            
        } catch (error) {
            res.status(errorCode).send({message: error.message})
        }
    }

    public deleteRecipe = async (req: Request, res: Response) =>{
        let errorCode = 400
        
        try {
            const token = req.headers.authorization
            const id = req.params.id

            const authenticator = new Authenticator()
            const payload = authenticator.getTokenPayload(token)

           const recipeDatabase = new RecipeDatabase()
           const result = await recipeDatabase.deleteRecipes(id)


           if(!id){
            throw new Error("Id faltando")
        }

        if (!payload) {
            errorCode = 401
            throw new Error("Token faltando ou inválido")
        }

        if (payload.role !== USER_ROLES.ADMIN) {
            errorCode = 403
            throw new Error("Somente admins podem acessar esse endpoint")
        } 

            res.status(200).send({message: "Recipe deleted successfully",recipes:result})
        } catch (error) {
            res.status(200).send({message: error.message})
        }
       


    }
}