import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"
import { size } from "../constants/pagination"

const GlobalState = (props) => {
    const [posts, setPosts] = useState([])

    const [post, setPost] = useState({})

    const [postComments, setPostComments] = useState([])

    const [page, setPage] =useState(1)

    const [isLoading, setIsLoading] = useState(false)


    const getPosts = (currentPage) =>{
        setIsLoading(true)
        
        const header ={
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        axios
        .get(`${BASE_URL}/posts?page=${currentPage}&size=${size}`, header)
        .then((res) =>{
            setPosts(res.data)

            setIsLoading(false)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }

    const getPostComments = (postId) =>{
        setIsLoading(true)

        const header ={
            headers: {
                authorization: localStorage.getItem("token")
            }
        }

        axios
        .get(`${BASE_URL}/posts/${postId}/comments`, header)
        .then((res) =>{
            setPostComments(res.data)
        })
        .catch((err) =>{
            console.log(err.message)
        })

    }

    const states = { posts, post, postComments,page, isLoading } //todas as variáveis de estado no contexto
    const setters = { setPosts, setPost, setPostComments, setPage, setIsLoading} // todas as funções de alteração de estado no contexto
    const getters = { getPosts, getPostComments } // todas as funções de requisição do contexto




  return (
    <GlobalStateContext.Provider value={{states, setters, getters}}>
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState