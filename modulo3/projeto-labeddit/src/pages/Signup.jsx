import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import useUnprotectedPage from "../hooks/useUnprotectedPage"
import { goToLogin } from "../routes/coordinator"


const Signup = () => {
  useUnprotectedPage()
  const navigate = useNavigate()

  
  return (
    <main>
      <Header
        isProtected={false}
      />
      <hr />
      <section>
        <h2>Cadastro de novo Usuário </h2>
        <button onClick={() => goToLogin(navigate)}>Voltar</button>
      </section>


    </main>
  )
}

export default Signup