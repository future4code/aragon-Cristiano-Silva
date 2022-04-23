import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const body = styled.body `
  background-color: blueviolet;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`
const Div = styled.div`
  display: flex;
  border: 1px solid black;
  justify-content: center;
  background-color: blueviolet;
  padding: 20px;
  flex-direction: column;
  width: 260px;

`
const Input = styled.input `
  
  margin:1px;
`

class App extends React.Component {
  state = {

      nomeInputUsuario : "",
      fotoInputUsuario : "",
      fotoInputPost    : "",


      postar:[

      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?id=3",
        fotoPost:    "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Riquelme",
        fotoUsuario: "https://picsum.photos/id/1005/50/50",
        fotoPost:"https://picsum.photos/seed/picsum/250/150?id=1"
      },
      {
        nomeUsuario: "Veron",
        fotoUsuario: "https://picsum.photos/id/1010/50/50",
        fotoPost: "https://picsum.photos/id/237/250/150?id=2"
      }      
    ]
  }

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.nomeInputUsuario,
      fotoUsuario: this.state.fotoInputUsuario,
      fotoPost   : this.state.fotoInputPost
  }
  
  const novosPosts= [...this.state.postar, novoPost]
  this.setState ({postar:novosPosts})
  this.setState ({nomeInputUsuario : "",})
  this.setState ({fotoInputUsuario : "",})
  this.setState ({fotoInputPost    : "",})

}

onChangeInputUsuario =(event) => {
  this.setState({nomeInputUsuario: event.target.value})
}
onChangeInputFoto =(event) => {
  this.setState({fotoInputUsuario: event.target.value})
}
onChangeInputPost =(event) => {
  this.setState({fotoInputPost: event.target.value})
}


  render() { 
   
    const geral =this.state.postar.map((post) => {
      return(    
      <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
    })
  
  return(

    <MainContainer>


      <Div>
      <Input className='dadosInput'
          value={this.state.nomeInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome do usuario"}
        />
         <Input
          value={this.state.fotoInputUsuario}
          onChange={this.onChangeInputFoto}
          placeholder={"foto Perfil"}
        />
         <Input
          value={this.state.fotoInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Post"}
        />        
        <button onClick={this.adicionaPost}>CLicar</button>

      </Div>
      <div>{geral}</div>
         
       
    </MainContainer>
   
  )
  }
}  
export default App;


