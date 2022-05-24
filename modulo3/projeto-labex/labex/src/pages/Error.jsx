import {useNavigate} from "react-router-dom"
import {goToHome} from "../routes/coordinator"


//pagina de erro
function Error (){
    const navigate = useNavigate()

    return(
        <>
            <h2>Error 400 - Página não encontrada!</h2>
            <button onClick={() => goToHome(navigate)}>Voltar para página de inicio</button>
        </>
    )
}
export default Error