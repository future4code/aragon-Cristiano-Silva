import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdmin, goToHome } from "../routes/coordinator";
import useRequestData from "../hooks/useRequestData"
import { decideCandidate } from "../services/requests"
import styled from "styled-components";


const Section = styled.section `
    background-color: #222;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    span {
        display: flex;
        flex-direction: column;
        padding: 5px;
    }

    button {
        width: 100px;
        height: 40px;
        margin: 10px;
        background-color: chartreuse;
        border: none;
        color: #04041d;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

        &:hover{
            cursor: pointer;
            transition: .3s ease-in-out;
            border-bottom: 1px solid ;
            background-color: #6ccf09;
            color: white;
        }
    }
`

function TripDetailsPage() {

    
    const navigate = useNavigate()

    const params = useParams()

    const[detailsData, getTripsDetail] = useRequestData(`trip/${params.tripId}`, {})

    useEffect(() => {
        if (!localStorage.getItem("token")){
            goToHome(navigate)
        }
    },[])

    const decide = (candidateId, decision) => {
        

        decideCandidate(params.tripId, candidateId, decision, getTripsDetail)
    }

    const candidatesList = detailsData.trip && detailsData.trip.candidates.map((candidate) => {
        return(
            <div key={candidate.id}>
                <span><b>Nome:</b>{candidate.name}</span>
                <span><b>Profissão:</b>{candidate.profession}</span>
                <span><b>Idade:</b>{candidate.age}</span>
                <span><b>País:</b>{candidate.country}</span>
                <span><b>Texto de Candidatura:</b>{candidate.applicationText}</span>
                <button onClick={() => decide(candidate.id,true)}>Aprovar</button>
                <button onClick={() => decide(candidate.id,false)}>Reprovar</button>
            </div>
        )
    })

    const approvedList = detailsData.trip && detailsData.trip.approved.map((pariticpant) => {
        return <li key={pariticpant.id}>{pariticpant.name}</li>
    })

    return (
        <>
            <Section>
                <button onClick={() => goToAdmin(navigate)}>Sair de detalhes</button>
                <h1>Viagem: {detailsData.trip && detailsData.trip.name}</h1>
                <hr />
                <h3>Lista de Candidatos</h3>
                {candidatesList}
                <hr />
                <h3>Lista de Aprovados</h3>
                {approvedList}
            </Section>
            
        </>

    )

}
export default TripDetailsPage