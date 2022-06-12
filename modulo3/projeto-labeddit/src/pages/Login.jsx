import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { goToSignup } from "../routes/coordinator"
import { requestLogin } from "../services/requests"
import useForm from "../hooks/useForm"
import useUnprotectedPage from "../hooks/useUnprotectedPage"
import styled from "styled-components"

const Section = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: solid 1px;
    width: 50%;
    height: 50%;
    margin: auto;
    border-radius: 5px;
    margin-top: 8rem;

    &:hover{
      
      cursor: pointer;
      transition: .6s ease-in-out;
      transform: scale(1.2);      
    }
    

    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    width: 50%;
    }
    button{
      margin: 6px;
    }
    
    h2{
      font-size: 2rem;
    }

`

const Button = styled.button `

    width: 10rem;
    float: right;
    margin-top:-4.5rem ;
    transform: translateX(-40%)


`



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
       <Button onClick={() => goToSignup(navigate)}>Ir para cadastro</Button>
      {/* <hr /> */}
      <Section>
        <h2>Login</h2>
        <form onSubmit={login}>
          <label htmlFor={"email"}>Email:</label>
          <input
          type={"email"}
          id={"email"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder="Digite seu e-mail"
          />
          <br />
          <label htmlFor={"password"}>Senha:</label>
          <input
          type={"password"}
          id={"password"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder="Digite sua Senha..."
          />
          <br />
          <button type={"submit"}>Entrar</button>
          {/* <h3>Clique abaixo para cadastro!</h3> */}
         {/*  <button onClick={() => goToSignup(navigate)}>Ir para cadastro</button> */}
        </form>
      </Section>
    {/*   <hr /> */}
      
      

    </main>
  )
}

export default Login