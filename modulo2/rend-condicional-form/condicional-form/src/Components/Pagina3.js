import React from "react";

class Pagina3 extends React.Component{
    render(){
        return(
            <div className="dadosPagina">
                <h2>ETAPA 2 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <div>
                    <p>7. Por que você não terminou um curso de graduação??</p>
                    <input ></input>
                </div>
                <div>
                    <p>6. Você fez algum curso complementar? </p>
                    <input ></input>
                    <select>
                        <option value="Nenhum">Nenhum</option>
                        <option value="Curso Técnico">Curso Técnico</option>
                        <option value="Curso de ingês">Curso de ingês</option>
                    </select>    
                </div>
            </div>
                       
        )
        
    }
}

export default Pagina3