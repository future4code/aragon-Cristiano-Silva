import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"


const Header = (props) => {
    const navigate = useNavigate()

    const logout =() =>{
        if(window.confirm("Tem certeza que deseja sair?")){
            
            localStorage.removeItem("token")
            localStorage.removeItem("userEmail")
            goToLogin(navigate)
            alert("Logout com sucesso!")
        }
    }
  return (
    <header>
        <h1>Labeddit</h1>
        {props.isProtected && (
            <>
                <h3>Bem-vindo, {localStorage.getItem("userEmail")}!</h3>
                <button onClick={logout}>Logout</button>
            </>
        )}

    </header>
  )
}

export default Header