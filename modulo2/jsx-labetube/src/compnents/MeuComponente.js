import styled from 'styled-components'

const TituloAzul = styled.h1`
    color:blue;
`

const TextoNegrito = styled.p `
    font-weigth:bold;
`

function MeuComponente(){
    return(
        <div>
            <TituloAzul>Meu componente</TituloAzul>
            <TextoNegrito>Esse aqui é meu componente</TextoNegrito>
        </div>
    )
}

export default MeuComponente