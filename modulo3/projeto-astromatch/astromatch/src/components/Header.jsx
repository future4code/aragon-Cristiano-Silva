import styled from "styled-components"

const Cabecalho = styled.header `
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 300px;
    margin: auto;
    background-color: #f6585d;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 100px;
`

const Button = styled.button`
    width: 180px;
    margin: auto;
    border-radius: 4px;
    border:none 0.2px ;
    background-color: #f1d1d2;
    color: #853538;
        
  

    &:hover{
        cursor: pointer;
        transition: .3s ease-in-out;
        background-color: #db7b7e;
        color: white;
    }

`


function Header (props){
    return(
        <Cabecalho>
            <h1>AstroMatch</h1>
            {props.pagina === "perfil" ?
                <Button onClick={props.irParaMatches}> Ir para matches </Button>
                 :  <Button onClick={props.irParaProfile}>Ir para perfis</Button>
                 
            }
        </Cabecalho>
    )
}
export default Header