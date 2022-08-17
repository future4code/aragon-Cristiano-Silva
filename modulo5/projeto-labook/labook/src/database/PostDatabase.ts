import { Post, IPostDB, IGetPostsDBDTO, ILikeDB, INewLikeDTO, ILikeDBDTO } from './../models/Post';
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (postDB: IPostDB) => {
      
    await BaseDatabase 
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

    public addLike = async(input: ILikeDB) =>{
        const newLikeDB: ILikeDB ={
            id: input.id,
            post_id: input.post_id,
            user_id: input.user_id,
        }
        
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .insert(newLikeDB) 
        
    }



    public getPosts = async (input: IGetPostsDBDTO) => {
        const search = input.search

        const postsDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where("content", "LIKE", `%${search}%`)

        return postsDB    

    }

    public findById = async (id: string) => {
        const usersDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select()
            .where({ id })

        return usersDB[0]
    }

    public deletePost = async (id: string) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({id})
    }

    deslikePost = async(deslike:ILikeDBDTO) =>{
        const deslikeDB: ILikeDBDTO = {
            post_id:deslike.post_id,
            user_id:deslike.user_id
        }
        await BaseDatabase
            .connection(PostDatabase.TABLE_LIKES)
            .where({post_id:deslike.post_id, user_id:deslike.user_id})
            .delete()
    }

}