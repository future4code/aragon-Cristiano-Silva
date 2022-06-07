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