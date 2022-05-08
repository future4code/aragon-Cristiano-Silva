import React from "react";
import axios from "axios";
import styled from "styled-components"
import userEvent from "@testing-library/user-event";
import './style.css'



/* const CardPlaylist = styled.div `

    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;    

` */
const Div = styled.div `
    background-color: blueviolet;
    color:white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 100%;

    button{
        width: 120px;
        text-align: center;
        color:blueviolet;

    }

`
/* const CaixaMusic = styled.div`
    border: 1px black solid;
    width: 40%;
    border-radius:6px;
    text-align:center;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-bottom: 5px;
` */

class NovaPlaylist extends React.Component {
    state = {
        novaMusica:[],
        name: "",
        artist: "",
        url: "",

       
    }
    componentDidMount = () => {
        this.pegarMusicas()
    }

    onChangeName = (e) =>{
        this.setState({name: e.target.value})
    }

    onChangeArtist = (e) => {
        this.setState({artist: e.target.value})
    }

    onChangeUrl = (e) => {
        this.setState({url: e.target.value})
    }

   
    pegarMusicas =() => {
        axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}tracks`,
            {
                headers: {
                    Authorization: "cristiano-silva-aragon"
                }
            } 
        )
        .then((response) => {
            this.setState({novaMusica: response.data.result.tracks})
        })
        .catch((error) => {
            alert("erro, favor tente novamente")
        })
    }

    

    render() {
        

        return(
           

            <Div>
                {/* {this.state.musicas.map((music) => {
                    return <CaixaMusic key={music.id}>
                        <p>Música: {music.name}</p>
                        <p>Banda: {music.artist}</p>
                        <audio controls="controls" src={music.url}></audio>
                    </CaixaMusic>
                })} */}
                <h4>VOLTAR PARA PLAYLIST!</h4>
                <button onClick={this.props.irParaLista}>Voltar</button>
                
               
            </Div>
        )
    }
}
export default NovaPlaylist