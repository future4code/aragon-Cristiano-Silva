import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"
import styled from "styled-components"

const HeaderGeral = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1F2833;
    color: #66FCF1;

    button{
        height: 2rem;
        margin: 2rem;
        width: 10vw;
        
    }

    h1{
        margin-left: 2rem;
        font-size:3rem;
    }
`



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
       
            <HeaderGeral>
                <h1>Labeddit</h1>
                {props.isProtected && (
                    <>
                <h3>Bem-vindo, {localStorage.getItem("userEmail")}!</h3>
                <button onClick={logout}>Logout</button>
                 </>
                )}
              
            </HeaderGeral>
       
  
  )
}

export default Header