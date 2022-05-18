import Matches from "./Matches";
import Profile from "./Profile";
import {useState} from "react"
import Header from "../components/Header";

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

       /*  switch (pagina) {
            case "perfil":
                return<Profile />
            case "matches":
                return<Matches/>
            default:
                return<Profile />        
        } */
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
            <hr />
            <main>
                {paginaAtual()}
            </main>

        </>
    )
}
export default Paginas