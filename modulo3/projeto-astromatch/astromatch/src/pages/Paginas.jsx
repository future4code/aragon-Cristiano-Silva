import Matches from "./Matches";
import Profile from "./Profile";
import {useState} from "react"
import Header from "../components/Header";
import styled from "styled-components";



const Main = styled.main `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f6585d;
    color: white;
    width: 300px;
    margin: auto;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      
   
`



function Paginas (){

    const [pagina, setPaginas ] = useState('perfil')

    
    const paginaAtual = () => {
        if(pagina === "perfil"){
            return <Profile />
        } else if (pagina === "matches"){
            return <Matches />
        } else {
            return < Profile />
        }

    }

    const irParaProfile =() => {  //  atualizando  o estado pagina para perfil
        setPaginas("perfil")
    }

    const irParaMatches =() => {  // atualizando o estado pagina para matches
        setPaginas("matches")
    }

    return(
        <>
            <Header
                pagina={pagina}
                irParaProfile={irParaProfile}
                irParaMatches={irParaMatches}
            />
            
            <Main>
                {paginaAtual()}
            </Main>

        </>
    )
}
export default Paginas