import React from "react";
import axios from "axios";
import "./App.css";

export default class App extends React.Component {
  state = {
    cadastros: [],
    inputName: "",
   
  };

  onChangeInput = (event) => {
    this.setState({ inputName: event.target.value });
  };



  componentDidMount() {
    this.getCadastros();
  }

  getCadastros = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "cristiano-silva-aragon"
          }
        }
      )
      .then((response) => {
        this.setState({ cadastros: response.data});
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  createCadastros = () => {
    const body = {
      name: this.state.inputName,
     
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "cristiano-silva-aragon"
          }
        }
      )
      .then((response) => {
        this.getCadastros();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <main>
        <section>
          <label>
            Nome
            <input value={this.state.inputName} onChange={this.onChangeInput} />
          </label>

      

          <button onClick={this.createCadastros}>Criar Usuario</button>
        </section>

        <section>
          {this.state.cadastros.map((cadastro) => {
            return <p key={cadastro.id}>{cadastro.name}</p>;
          })}
        </section>
      </main>
    );
  }
}
