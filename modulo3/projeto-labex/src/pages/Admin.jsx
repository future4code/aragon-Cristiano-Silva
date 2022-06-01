import Header from "../components/Header"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToHome } from "../routes/coordinator"
import TripCard from "../components/TripCard"
import { createTrip ,deleteTrip } from "../services/requests"
import useRequestData from "../hooks/useRequestData"
import actualDate from "../utils/actualDate"
import { planets } from "../constants/planets"
import useForm from "../hooks/useForm"
import styled from "styled-components"

const Section = styled.section `
    color:white;
    background-color: #222;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content: center;
    margin: auto;

    input{
        height: 35px;
        border-radius: 4px;
        border: solid 1px chartreuse;
        margin:6px;
        width: 183px;
    }
    select, option{
        height: 37px;
        border-radius: 4px;
        border: solid 1px chartreuse;
        margin:8px;
    }
    button{
      text-align: center;
      background-color: chartreuse;
      color: #0c0c35;
      height: 35px;
      width: 300px;
      display: flex;
      justify-content: center;
      margin: auto;
      align-items: center;
      margin-bottom: 15px;
      margin-top: 15px;

      &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #6ccf09;
        color: white;
    }
  }
  h2 {
    color: chartreuse;
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
    
  @media (max-width:900px) {
        display: flex;
        flex-direction: column;
        text-align: center;

        h1{
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
       
        
    }

   `


//Pagina do Adm
function Admin (){
  const navigate = useNavigate()

  const [tripsData, getTripsData] = useRequestData("trips", {})

  const { form, onChange, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  useEffect(() =>{
    if (!localStorage.getItem("token")){
      goToHome(navigate)
    }
  }, [])

  const onClickCreate = (e) => {
    e.preventDefault();


    createTrip(form, clear, getTripsData)
  }  

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
        
          <main>
            <Section>
              <h2>Crie uma nova Viagem</h2>

                <form onSubmit={onClickCreate}>
                  <label htmlFor={"name"}>{/* Nome: */}</label>
                  <input
                  placeholder="Digite seu Nome:"
                  id={"name"}
                  name={"name"}
                  value={form.name}
                  onChange={onChange}
                  /* pattern={"^,{5,}$"}
                  title={"O nome da viagemdeve ter no mínimo 5 caracteres"}
                  required  */                 
                />
                  <label htmlFor={"planet"}>{/* Planeta: */}</label>
                  <select
                  placeholder="Planeta:"
                  name={"planet"}
                  id={"planet"}
                  defaultValue={""}
                  onChange={onChange}
                  required
                >
                <option value={""} disabled>Escolha um Planeta...</option>  

                {planets.map((planet) =>{
                  return <option value={planet} key={planet}>{planet}</option>
                })}
                </select>

                <label htmlFor={"date"}>{/* Data de Lançamento: */}</label>
                <input 
                  placeholder="Data de lançamento:"
                  id={"date"}
                  type={"date"}
                  name={"date"}
                  value={form.date}
                  onChange={onChange}
                  min ={actualDate()}
                  required
                />

                <label htmlFor={"description"}> {/* Descrição: */} </label>
                 <input
                    placeholder="Descrição:"
                    id={"description"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    pattern={"^.{20,}$"}
                    title={"O nome deve ter no mínimo 20 caracteres"}
                    required 
                />
                <label htmlFor={"duration"}> Duração &#40;em dias&#41;: </label>
                  <input
                    id={"duration"}
                    type={"number"}
                    name={"durationInDays"}
                    value={form.durationInDays}
                    onChange={onChange}
                    min={30}
                    required
                />
                <br />
                <button type={"submit"}>Criar</button>
              </form>

           </Section>            
            <hr />

            <section>
              <h2>Lista de Viagens</h2>
              {tripsList}
            </section>
            
          </main>        
        </>
      
    )
}
export default Admin