import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { goToSignup } from "../routes/coordinator"
import { requestLogin } from "../services/requests"
import useForm from "../hooks/useForm"
import useUnprotectedPage from "../hooks/useUnprotectedPage"


const Login = () => {
  useUnprotectedPage()// custom hook que verifica se esta tela é protegida

  const navigate = useNavigate()

  const {form, onChange, clear} = useForm({email:"",password:"" })

  const login =(e) =>{
    e.preventDefault()

    requestLogin(form, clear, navigate)
  }



  return (
    <main>
      <Header 
      isProtected={false}
      />
      <hr />
      <section>
        <h2>Login</h2>
        <form onSubmit={login}>
          <label htmlFor={"email"}>Email:</label>
          <input
          type={"email"}
          id={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          />
          <br />
          <label htmlFor={"password"}>Senha:</label>
          <input
          type={"password"}
          id={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          />
          <br />
          <button type={"submit"}>Entrar</button>
        </form>
      </section>
      <hr />
      <h3>Nãotem cadastro? Clique no botão a seguir para se cadastrar:</h3>
      <button onClick={() => goToSignup(navigate)}>Ir para cadastro</button>

    </main>
  )
}

export default Login