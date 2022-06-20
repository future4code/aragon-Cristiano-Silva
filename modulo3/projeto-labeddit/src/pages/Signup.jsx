import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import useUnprotectedPage from "../hooks/useUnprotectedPage"
import { goToLogin } from "../routes/coordinator"
import  useForm  from "../hooks/useForm"
import { requestSignUp } from "../services/requests"
import styled from "styled-components"

const Section = styled.section `
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px;
    width: 50%;
    margin: auto;
    height: 50%;
    margin-top: 8rem;
    border-radius: 5px;

    &:hover{
      
      /* cursor: pointer; */
      transition: .6s ease-in-out;
      transform: scale(1.2);      
    }

    @media (max-width:850px) {
        display: flex;
        flex-direction: column;
        width: 23rem;
        
    }

    form {
    display: flex;
    flex-direction: column;
    }
    button{
      margin: 1.5rem;
      
    }
    h2{
      font-size: 2rem;
    }

    input{
    border-bottom :2px solid #fff ;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 15px;
    height: 45px;
    line-height: 1.2;
    padding: 0.5px;

    border-bottom: 2px solid  #66FCF1;
    margin-bottom: 20px;
    position: relative;
    width: 90%;
   }
`
const Button =styled.button`
  width: 10rem;
  height: 2.5rem;
  float: right;
  margin-top:-4.5rem ;
  transform: translateX(-40%);

  @media (max-width:850px) {
      margin: auto;
      margin-right: 6rem;
        
    } 
 
`


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
      <Button onClick={() => goToLogin(navigate)}>Voltar</Button>
      {/* <hr /> */}
      <Section>
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
          placeholder="Digite seu nome"
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
          placeholder="Digite seu e-mail"
        />
        <br />
        <label htmlFor={"password"}>Senha:</label>
          <input
          id={"password"}
          name={"password"}
          type={"password"}
          value={form.password}
          onChange={onChange}
          pattern={"^.{8,30}$"}
          title={"O nome deve ter no mínimo 8 e no máximo 30 caracteres"}
          required
          placeholder="Digite sua Senha"
        />
        <br />
        <button type={"submit"}>Cadastrar Usuário</button>
        </form>
      </Section>


    </main>
  )
}

export default Signup