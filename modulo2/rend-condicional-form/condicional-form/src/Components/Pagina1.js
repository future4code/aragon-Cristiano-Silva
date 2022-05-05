import React from "react";


class Pagina1 extends React.Component{
    render(){
        return(
            <div className="dadosPagina">
                <h2>ETAPA 1- DADOS GERAIS</h2>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input ></input>
                </div>
                <div>
                    <p>2. Qual a sua idade?</p>
                    <input  ></input>
                </div>
                <div>
                    <p>3. Qual o seu email? </p>
                    <input ></input>
                </div>
                <div>
                    <p>Qual a sua escolaridade?</p>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option valur="Ensino superior completo">Ensino superior completo</option>
                    </select>
                </div>
                
            </div>
                       
        )
    }
}

export default Pagina1