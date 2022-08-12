import { IRecipeDB } from "../models/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public static TABLE_RECIPES = "Cookenu_Recipes"

    public getAllRecipes = async (search: string | undefined) => {
        let result: IRecipeDB[] = [];

        if (search) {
            result = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where("title", "LIKE",  `%${search}%`)      
        } else {
            result = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
        }
        return result
    }

    public checkIfExistsById = async (id: string) => {
        const result: IRecipeDB[] = await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .select()
            .where({ id })
        
        return result[0] ? true : false
    }

    public createdRecipes = async (recipes: IRecipeDB) => {
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .insert(recipes)

    }

    public updatedRecipes = async (id:string, title:string, description:string) => {
        await BaseDatabase
        .connection(RecipeDatabase.TABLE_RECIPES)
        .update({title, description})
        .where({id})

    }

    public deleteRecipes = async (id:string) => {
        await BaseDatabase
            .connection(RecipeDatabase.TABLE_RECIPES)
            .delete()
            .where({id})
    }
}