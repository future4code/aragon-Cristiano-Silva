import Header from "../components/Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator"
import TripCard from "../components/TripCard"
import { deleteTrip } from "../services/requests"
import useRequestData from "../hooks/useRequestData"



//Pagina do Adm
function Admin (){
  const navigate = useNavigate()

  const [tripsData, getTripsData] = useRequestData("trips", {})

  useEffect(() =>{
    if (!localStorage.getItem("token")){
      goToHome(navigate)
    }
  }, [])


  const removeTrip = (tripId) => {
    if(window.confirm("Tem certeza que deseja remover esta viagem?")){
      deleteTrip(tripId, getTripsData)
    }
  }

  const tripsList = tripsData.trips ? tripsData.trips.map((trip) =>{
    return (
      <TripCard
        key={trip.id}
        trip={trip}
        removeTrip={removeTrip}
      />  
    )
  }) : ( <p>Carregando...</p> )

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
              {tripsList}
            </section>
            
          </main>        
        </>
      
    )
}
export default Admin