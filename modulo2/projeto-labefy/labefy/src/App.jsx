import React from 'react';
import axios from 'axios';



class App extends React.Component {
  state = {
    playlists: [],
    inputName: ""
  }

  onChangeInput = (e) => {
    this.setState({ inputName: e.targe.value})
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


  

  render () {
    return (
      <main>
        <h1>Playlists Labefy</h1>

        <hr />

        <section>
          <label>
            Nome da playlist
            <input value={this.state.inputName} onChange={this.onChangeInput} />

            <button onClick={this.createPlaylist}>Nova playlist</button>
          </label>
        </section>

        <section>
          {this.state.playlists.map((playlist) => {
            return <p key={playlist.id}>{playlist.name}</p>
          })}
        </section>

      </main>
    )
  }
}

export default App;
