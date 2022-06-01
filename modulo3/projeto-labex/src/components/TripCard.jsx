import { useNavigate } from "react-router-dom"
import { goToTripDetailsPage } from "../routes/coordinator"
import styled from "styled-components"

const Button = styled.button `
        margin-left: 6px;
        width: 100px;
        margin-top: 1px;
        height: 29px;
        background-color: chartreuse;
        border: none;
        color: #04041d;

        &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        border-bottom: 1px solid ;
        background-color: #6ccf09;
        color: white;
        }
`

// Renderizar os cards

function TripCard(props){

    const navigate = useNavigate()

    const {id, name, description, planet, durationInDays, date} = props.trip

    const token = localStorage.getItem("token")

    return(
        <>
            <p><b>Nome:</b>{name}</p>
            <p><b>Descrição:</b>{description}</p>
            <p><b>Planeta:</b>{planet}</p>
            <p><b>Duração:</b>{durationInDays}</p>
            <p><b>Data:</b>{date}</p>


            {token && (
                <>
                    <Button onClick={() => goToTripDetailsPage(navigate, id)}>Exibir detalhes</Button>
                    <Button onClick={() =>props.removeTrip(id)}>Excluir viagem</Button>
                
                </>
            )}
            <hr />
        </>
    )
}

export default TripCard