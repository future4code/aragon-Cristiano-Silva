import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'Texto da primeira tarefa',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Texto da segunda tarefa',
        completa: true // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: '' /*ao alterar completas ou pendentes retorna na tela se tarefa foi concluida ou se tem algo em pendente ou em aberto. */
    }

  componentDidUpdate() { /*Assim que o componente é montado a função é executada */
    const tarefalista = JSON.stringify(this.state.tarefas)
    window.localStorage.setItem("tarefas",tarefalista)

  };

  componentDidMount() {/*Atualiza as informações a cada alteração  exetucada*/
    let tarefaDearray = localStorage.getItem("tarefas")
    tarefaDearray = JSON.parse(tarefaDearray)
    if (tarefaDearray !== null){
      this.setState({tarefas: tarefaDearray})
    }

  };

  onChangeInput = (event) => { /*Pega o evento e guarda no estado*/
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa =[
      {
        id: Date.now(), // aqui, pode deixar o valor Date.now() para todas as tarefas as serem criadas
        texto: this.state.inputValue, // aqui, o texto da tarefa virá do input controlado guardado no estado
        completa: false // aqui, pode deixar o valor false para todas as tarefas as serem criadas, pq a tarefa sempre vai começar como não completa.
      }
      
    ]
    const copiaTarefa = [novaTarefa,...this.state.tarefas]
    this.setState({tarefas: novaTarefa })
    

  }

  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefanew) => {
      if (id === tarefanew.id){
        const newTarefa = {
          ...tarefanew,
          completa: !tarefanew.completa

        }
        return newTarefa
      } else {
        return tarefanew
      }
    })
    this.setState({tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
    
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => { /* variavel listaFiltrada retornando uma função com filter e condição filtro para retornar na pagina se caso escolher pendente ou completas o resultado da da tarefa */
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => { /*componente tarefa é uma lista */
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
