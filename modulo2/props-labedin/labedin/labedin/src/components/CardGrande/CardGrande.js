import styled from "styled-components"
import React from 'react';

const BigCard =styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const BigCardI = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const BigCardH = styled.h4`
    margin-bottom: 15px;
`

const BigCardbig = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <BigCard>
            <BigCardI src={ props.imagem } />
            <BigCardbig>
                <BigCardH >{ props.nome }</BigCardH > 
                <p>{props.descricao}</p>
            </BigCardbig >
        </BigCard >
    )
}

export default CardGrande;







/*

ORIGINAL CARDGRANDE.JS


.bigcard-container {
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
}

.bigcard-container > img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}

.bigcard-container h4 {
    margin-bottom: 15px;
}

.bigcard-container > div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
----------------------------------

import React from 'react';
import './CardGrande.css'


function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;

*/