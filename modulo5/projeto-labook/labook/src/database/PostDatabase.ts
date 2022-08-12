import { Post, IPostDB, IGetPostsDBDTO, ILikeDB, INewLikeDTO } from './../models/Post';
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (postDB: IPostDB) => {
      
    await BaseDatabase 
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

    public addLike = async(likeDB: ILikeDB) =>{
        
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .insert(likeDB)
        
        
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

}