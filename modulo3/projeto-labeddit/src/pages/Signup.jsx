import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import useUnprotectedPage from "../hooks/useUnprotectedPage"
import { goToLogin } from "../routes/coordinator"
import  useForm  from "../hooks/useForm"
import { requestSignUp } from "../services/requests"


const Signup = () => {
  useUnprotectedPage()
  const navigate = useNavigate()

  const {form, onChange, clear} = useForm({name:"", email:"", password:""})

  const signup =(e) =>{
    e.preventDefault()

    requestSignUp(form, clear, navigate)
  }


  return (
    <main>
      <Header
        isProtected={false}
      />
      <hr />
      <section>
        <h2>Cadastro de novo Usuário </h2>
        <form onSubmit={signup}> 
          <label htmlFor={"name"}>Nome:</label>
          <input
          id={"name"}
          name={"name"}
          value={form.name}
          onChange={onChange}
          pattern={"^.{3,}$"}
          title={"O nome deve ter no mínimo 3 caracteres"}
          required
        />
        <br />
        <label htmlFor={"email"}>Email:</label>
          <input
          id={"email"}
          name={"email"}
          type={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <br />
        <label htmlFor={"name"}>Senha:</label>
          <input
          id={"password"}
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          pattern={"^.{8,30}$"}
          title={"O nome deve ter no mínimo 8 e no máximo 30 caracteres"}
          required
        />
        <br />
        <button type={"submit"}>Cadastrar Usuário</button>
        </form>
        <button onClick={() => goToLogin(navigate)}>Voltar</button>
      </section>


    </main>
  )
}

export default Signup