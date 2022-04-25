import React from "react";

class MenssegerChat extends React.Component{
    
    state ={

       chats: [{ 
           
        usuario: " ",
        mensagem: " ",}
        ],

        valorInputUsuario: "",
        valorInputMensagem: "",
    }


    adicionaMensagem =() => {
        const novoChat ={
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        }

        const novasMensagens =[...this.state.chats, novoChat]
        this.setState({chats: novasMensagens})

    }
    onChangeInputUsuario = (event) => {
        this.setState({valorInputUsuario: event.target.value})
    }  
    onChangeInputMensagem = (event) => {
        this.setState({valorInputMensagem: event.target.value})
    } 
   
    render(){
        const listaDeChat = this.state.chats.map((chat) => {
            return (
                <div>
                   {chat.usuario} :  {chat.mensagem}
                </div>               
            )
        });

        return (
                       
            <div>
                <div>{listaDeChat}</div>
                <input className="User"
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputUsuario}
                placeholder={"Usuario"}
                />

                <input className="Mensseger"
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                placeholder={"mensagem"}
                />
                <button onClick={this.adicionaMensagem}>Enviar</button>
               
            </div>
           
        )
    }
}

export default MenssegerChat;