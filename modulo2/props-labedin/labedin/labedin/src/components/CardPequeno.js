import React from "react";
import  './CardPequeno.css'

function MeusDados(props){
    return (
        <div className='TodosMeusDados'>
            <img src = {props.imagem} />
            <div>
                <h5>{props.nome}</h5>
                <p>{props.descricao}</p>
            </div>
        </div>
        
    )
}

export default MeusDados;