import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {  goToHome} from "../routes/coordinator"
import { requestLogin } from "../services/requests"
import styled from "styled-components"

const Headers = styled.header `
    display: flex;
    justify-content: space-between;
    background-color: #222;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 30vh;
    width: 100%;
    
    h1 ,h2{
        font-size: 60px;
        height: 20px;
        margin-left: 20px;
    }

    h1 {
        margin-top: 12px;
    }

    @media (max-width:900px) {
        display: flex;
        flex-direction: column;
        text-align: center;

        h1{
            text-align: center;
        }
        section {
            
            text-align: center;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }

    
    
`
 const Form = styled.form`
    display: flex;
    flex-direction: row;
    margin: 6vh;
    height: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    label{
        margin-top: 7px;
        margin-left: 15px;
        height: 25px;
    }

    input{
        border-radius: 5px;
        margin-left:3px;
        height: 25px;
       
    }
    button{
        margin-left: 6px;
        width: 100px;
        margin-top: 1px;
        height: 29px;
        background-color: chartreuse;
        border: none;
        color: #04041d;

        &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #6ccf09;
        color: white;
        }
    }
    @media (max-width:650px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        section {
            text-align: center;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
        }

     
    }   

  
    
` 
const Button = styled.button `
    width: 100px;
    height: 30px;
    margin: 30px;
    background-color: chartreuse;
    border: none;
    color: #04041d;

    &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #6ccf09;
        color: white;
    }
    @media (max-width:900px) {
       margin: auto;

        
    }

`


function Header (){
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")

    const renderizaInputs =(e) =>{  //handleInputValues
        switch (e.target.name){
            case "email":
                return setEmail(e.target.value)
            case "password":
                return setPassword(e.target.value)   
            default:
                return
        }
    }

    const login = (e) =>{
        e.preventDefault()


        requestLogin(email, password, navigate)
    }

    const logout= () =>{
        localStorage.removeItem("token")

        goToHome(navigate)
    }

  

    const renderizarPaginas =
        localStorage.getItem("token") ?
        (
            <Button onClick={logout}>logout</Button>
        ) : (
            <Form onSubmit={login}>
                <label htmlFor={"email"}>Email:</label>
                <input
                placeholder="Digite seu Email"
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={renderizaInputs}
                 />   
            <br />
                <label htmlFor={"password"}>Senha:</label>
                    <input 
                        placeholder="Digite sua senha:"
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={renderizaInputs}
                    />
                    <br />
                    <button type={"submit"}>Entrar</button>
            </Form>
        )
 
    return(
        <Headers>
            <h1>Labex</h1>
           
            {renderizarPaginas}
        </Headers>
    )
}
export default Header