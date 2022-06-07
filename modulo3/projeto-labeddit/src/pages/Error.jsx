import { useNavigate } from "react-router-dom"
import { goToFeed } from "../routes/coordinator"


const Error = () => {
  const navigate = useNavigate()


  return (
   <main>
     <h1>Error 400 - Página não encontrada!</h1>
     Botão que direciona o usuário para página do Feed.
     <button onClick={()=> goToFeed(navigate)}>Ir para Feed</button>
   </main>
  )
}

export default Error