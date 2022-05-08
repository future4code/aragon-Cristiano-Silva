import React from 'react';
import Listas from './pages/Listas';
import NovaPlaylist from './pages/NovaPlaylist';




class App extends React.Component {
  state = {
    telaAtual : "lista",
    clicarMusica: ""
  }

  escolherTela =() => {
    switch (this.state.telaAtual) {
      case "novaplaylist":
        return <NovaPlaylist irParaLista ={this.irParaLista}/>
      case  "lista":
        return <Listas irParaNovaPlaylist={this.irParaNovaPlaylist}/>
      default:
        return <div>Erro! Página não encontrada </div> 
    }
  }

  detalheDaPagina =(url) => {
    this.setState({telaAtual: "novaplaylist", clicarMusica: url})
  }

  irParaNovaPlaylist = () => {
    this.setState({telaAtual: "novaplaylist"}) // para ir a lista de detalhes 
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})  // para ir a lista 
  }

  irParaVerMusicas =() => {
    this.setState({telaAtual: "vermusicas"}) // para ver musicas
  }


  render () {

    return (

      <div>
       {this.escolherTela()}      
      </div>
     
    )
  }
}

export default App;
