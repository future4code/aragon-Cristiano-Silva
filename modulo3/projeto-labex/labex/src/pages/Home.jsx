import Header from "../components/Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdmin } from "../routes/coordinator"

// Pagina Inicial
function Home (){
    const navigate = useNavigate()

    useEffect(() =>{
        if (localStorage.getItem("token")){
            goToAdmin(navigate)
        }
    },[])




    return(
        <>

            <Header />
            <main>
                <section>
                    <h2>Inscreva-se em uma nova Viagem</h2>
                </section>                
                <hr />
                <section>
                    <h2>Lista de Viagens</h2>
                </section>
              
            </main>
            
        </>
    )
}
export default Home