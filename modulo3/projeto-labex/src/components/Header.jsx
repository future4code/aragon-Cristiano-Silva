import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {  goToHome} from "../routes/coordinator"
import { requestLogin } from "../services/requests"



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
            <button onClick={logout}>logout</button>
        ) : (
            <form onSubmit={login}>
                <label htmlFor={"email"}>Email:</label>
                <input
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={renderizaInputs}
                 />   
            <br />
                <label htmlFor={"password"}>Senha: </label>
                    <input 
                        id={"password"}
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={renderizaInputs}
                    />
                    <br />
                    <button type={"submit"}>Entrar</button>
            </form>
        )
 
    return(
        <header>
            <h1>Labex</h1>
            {renderizarPaginas}
        </header>
    )
}
export default Header