import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {
    const [posts, setPosts] = useState([])

    const [post, setPost] = useState({})

    const [postComments, setPostComments] = useState([])

    const getPosts = () =>{
        
        const header ={
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        axios
        .get(`${BASE_URL}/posts?page=1&size=10`, header)
        .then((res) =>{
            setPosts(res.data)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    }

    const getPostComments = (postId) =>{
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

    const states = { posts, post, postComments } //todas as variáveis de estado no contexto
    const setters = { setPosts, setPost, setPostComments} // todas as funções de alteração de estado no contexto
    const getters = { getPosts, getPostComments } // todas as funções de requisição do contexto




  return (
    <GlobalStateContext.Provider value={{states, setters, getters}}>
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState