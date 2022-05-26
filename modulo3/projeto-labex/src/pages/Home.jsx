import Header from "../components/Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToAdmin } from "../routes/coordinator"
import TripCard from "../components/TripCard"
import useRequestData from "../hooks/useRequestData"

// Pagina Inicial
function Home (){
    const navigate = useNavigate()


    const [tripsData] = useRequestData("trips", {})


    useEffect(() =>{
        if (localStorage.getItem("token")){
            goToAdmin(navigate)
        }
    },[])

    const tripsList = tripsData.trips ? tripsData.trips.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                trip={trip}
            />    
        )
    }) : ( <p>Carregando...</p> )


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
                    {tripsList}
                </section>
              
            </main>
            
        </>
    )
}
export default Home