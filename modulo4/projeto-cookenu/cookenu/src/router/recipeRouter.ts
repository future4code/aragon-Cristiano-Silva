import { Router } from 'express'
import { RecipeController } from '../controller/RecipeController'

export const recipeRouter = Router()

const recipeController = new RecipeController()

recipeRouter.get("/", recipeController.getAllRecipes)
recipeRouter.post("/created", recipeController.createdRecipe)
recipeRouter.put("/:id",recipeController.editRecipe)
recipeRouter.delete("/:id",recipeController.deleteRecipe)