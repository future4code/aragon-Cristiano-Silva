import React from "react";
import axios from "axios";
import './style.css'
import NovaPlaylist from "./NovaPlaylist";
import styled from "styled-components"


const Main = styled.main `
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border: 1px solid blueviolet;
  justify-content: space-between;
  
  ;

  section {
    display: flex;
    flex-direction: column;   
    width: 300px;
    justify-content: space-around;
  }
  section > button{

  }

  p{
    display: flex;
    justify-content: space-between;
    font-size:20px;
    
  
  }
  button{    
    color: blueviolet;
    text-align: right fixed;
        
  }

  label{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-bottom:5px;
    border: 1px solid cadetblue;
  }
  input{
    margin: 8px;
  }
  
  body{
        background-color: blueviolet;
    }
`

const Botao = styled.div `
  background-color: blueviolet;
`




class Listas extends React.Component {

    state = {             
        playlists: [],
        inputName: ""
      }
    

      onChangeInput = (e) => {
        this.setState({ inputName: e.target.value})
      }
    
      componentDidMount(){
        this.getPlaylists()
      }
    
      getPlaylists = () => {
        axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          {
            headers: {
              Authorization: "cristiano-silva-aragon"
            }
          }
        )
        .then((response) => {
          console.log(response)
          this.setState({playlists: response.data.result.list})
        })
        .catch((error) => {
          console.log(error.message)
        })  
    
      }
        createPlaylist = () => {
          const body = {
            name: this.state.inputName
          }
              
          axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", 
            body,
            {
              headers: {
                Authorization: "cristiano-silva-aragon"
              }
            }
          )
          .then((response) => {
            this.getPlaylists()
          })  
          .catch((error) => {
            console.log(error.message)
          })
        }

        deletarPlaylist = (id) => {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
                axios.delete(
                url,                     
                {
                    headers: {
                        Authorization: "cristiano-silva-aragon"
                    }
                }                           
        )
            .then((response) => {
                console.log(response)
                this.getPlaylists()
            })
            .catch((error) => {
                alert("erro tente novamente.")
            })
        }
        
    
    render (){

        return(
                <Main>
                    <h1>Playlists Labefy</h1>

                    <section>
                        <label>
                            Crie uma nova Playlist!
                            <input value={this.state.inputName} onChange={this.onChangeInput} />
                            <button onClick={this.createPlaylist}>Nova playlist</button>
                        </label>
                    </section>

                    <section>
                        {this.state.playlists.map((playlist) => {                            
                          return <p key={playlist.id}>{playlist.name}

                          <Botao>
                          <button onClick={this.props.irParaNovaPlaylist}>musica </button>
                          <button onClick={() => this.deletarPlaylist(playlist.id)}>x</button>

                          </Botao>
                          
                          
                          
                          
                          </p>                        

                        })}
                    </section>
                </Main>
          
        )
    }
}
export default Listas