import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/coordinator"

export const useUnprotectedPage = () => {
    const navigate = useNavigate()

    useEffect(() =>{ //logica de verificação de página protegida na renderiação de tela.
        const token = localStorage.getItem("token")

        if(token) {
            goToFeed(navigate)
        }
    })

  
}

export default useUnprotectedPage