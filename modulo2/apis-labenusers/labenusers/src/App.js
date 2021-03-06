import React from "react"
import TelaCadastro from "./components/TelaCadastro"
import TelaListaUsuarios from "./components/TelaListaUsuarios"
import './style.css'



export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>  // props component telalista
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/> // props component telacadastro
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      
      <div className="App">
        {this.escolheTela()}
      </div>
    )
  }
}
