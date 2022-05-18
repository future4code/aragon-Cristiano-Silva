

function Header (props){
    return(
        <header>
            <h1>AstroMatch</h1>
            {props.pagina === "perfil" ?
                <button onClick={props.irParaMatches}>Ir para matches </button>
                 :  <button onClick={props.irParaProfile}>Ir para perfis</button>
                 
            }
        </header>
    )
}
export default Header