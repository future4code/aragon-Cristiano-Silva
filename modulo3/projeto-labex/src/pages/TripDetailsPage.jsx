import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdmin, goToHome } from "../routes/coordinator";
import useRequestData from "../hooks/useRequestData"

function TripDetailsPage() {
    
    const navigate = useNavigate()

    const params = useParams()

    const[detailsData] = useRequestData(`trip/${params.tripId}`, {})

    useEffect(() => {
        if (!localStorage.getItem("token")){
            goToHome(navigate)
        }
    },[])

    const candidateList = detailsData.trip && detailsData.trip.candidates.map((candidate) => {
        return(
            <div key={candidate.id}>
                <span><b>Nome:</b>{candidate.name}</span>
                <span><b>Profissão:</b>{candidate.profession}</span>
                <span><b>Idade:</b>{candidate.age}</span>
                <span><b>País:</b>{candidate.country}</span>
                <span><b>Texto de Candidatura:</b>{candidate.applicationText}</span>
                <button>Aprovar</button>
                <button>Reprovar</button>
            </div>
        )
    })

    return (
        <>
            <button onClick={() => goToAdmin(navigate)}>Sair de detalhes</button>
            <h1>Viagem: {detailsData.trip && detailsData.trip.name}</h1>
            <hr />
            <h3>Lista de Candidatos</h3>
            {candidateList}
            <hr />
            <h3>Lista de Aprovados</h3>
        </>

    )

}
export default TripDetailsPage