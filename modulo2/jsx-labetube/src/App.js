import styled from 'styled-components'
import logo from './logo.svg';
import './App.css';
import CardVideo from './compnents/CardVideo';
import ItemMenu from './compnents/ItemMenu';

const Footer = styled.footer`
    height: 10%;
    background-color: grey;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`;

function App() {  /*export defalut function app()*/
  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>
        <main>
            <nav className="menu-vertical">
                <ul>
                   <ItemMenu item={"Início"} />
                   <ItemMenu item={"Vídeos"} />
                   <ItemMenu item={"Upload"}/>
                   <hr />
                   <hr />
                   <ItemMenu item={"Perfil"} />
                   <ItemMenu item={"contatos"}/>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <CardVideo titulo={"Titulo 1"} imagem={"1"}/>
                <CardVideo titulo={"Titulo 2"} imagem={"2"}/>
                <CardVideo titulo={"Titulo 3"} imagem={"3"}/>
                <CardVideo titulo={"Titulo 4"} imagem={"4"}/>
                <CardVideo titulo={"Titulo 5"} imagem={"5"}/>
                <CardVideo titulo={"Titulo 6"} imagem={"6"}/>
                <CardVideo titulo={"Titulo 7"} imagem={"7"}/>
                <CardVideo titulo={"Titulo 8"} imagem={"8"}/>
            </section>
        </main>

        <Footer>
            <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </div>  
  );
}

export default App;
