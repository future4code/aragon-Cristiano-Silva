import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"



const GlobalState = (props) => {
    const [posts, setPosts] = useState([])

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

    const states = { posts } //todas as variáveis de estado no contexto
    const setters = { setPosts} // todas as funções de alteração de estado no contexto
    const getters = { getPosts } // todas as funções de requisição do contexto




  return (
    <GlobalStateContext.Provider value={{states, setters, getters}}>
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState