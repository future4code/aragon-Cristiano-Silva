import axios from 'axios'
import {BASE_URL} from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const requestLogin = (form,clear, navigate )=>{

    const body ={
        email:form.email,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) =>{
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userEmail", form.email)
        alert("Login realizado com sucesso")
        // ao logar usuário sera direcionado para o Feed da pagina
        goToFeed(navigate)

    })
    .catch((err) =>{
        alert("Email e/ou senha inválidos! Tente novamente")// se login não for efetivado os campos serão resetados 
        clear() // função de reset no custom hooke useForm
    })

}

export const requestSignUp = (form, clear, navigate) =>{
    const body ={
        username: form.name,
        email: form.email,
        password: form.password
    }

    axios
    .post(`${BASE_URL}/user/signup`, body)
        .then((res) =>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("userEmail", form.email)
            alert("Usuário criado com sucesso! Seja bem-vindo!")
            goToFeed(navigate)

        })
        .catch((err) =>{
            alert("Alto deu errado! Tente novamente")
            //caso o signup não seja efetivado os campos input resetam
            clear()
        })
}   

export const requestCreatePost = (form, clear, getPosts) =>{
    const header = {
        headers:{
            authorization: localStorage.getItem("token")
        }
    }

    const body = {
        title:form.title,
        body: form.body
    }

    axios
    .post(`${BASE_URL}/posts`, body, header)
    .then((res) =>{
        alert(res.data)

        getPosts()
        clear()
    })
    .catch((err) =>{
        console.log(err.message)
    })
}

