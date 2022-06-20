import Header from "../components/Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator"


//Pagina do Adm
function Admin (){

  const navigate = useNavigate()

  useEffect(() =>{
    if (!localStorage.getItem("token")){
      goToHome(navigate)
    }
  }, [])




    return(
        <>
          <Header />
          <hr />
          <main>
            <section>
              <h2>Crie uma nova Viagem</h2>
            </section>            
            <hr />
            <section>
              <h2>Lista de Viagems</h2>
            </section>
            
          </main>        
        </>
      
    )
}
export default Admin