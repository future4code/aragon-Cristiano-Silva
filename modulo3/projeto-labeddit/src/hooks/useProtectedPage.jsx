import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"



export const useProtectedPage = () => {
    const navigate = useNavigate()

    //função que armazena a lógica de verificação de página protegida na renderização de tela.
    useEffect(() =>{
        const token = localStorage.getItem("token")

        if(!token) {
            goToLogin(navigate)
        }
    })

  return (
    <div>

    </div>
  )
}

export default useProtectedPage