import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import MeusDados from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEjWBWDg7eGsg/profile-displayphoto-shrink_800_800/0/1614981722880?e=1655942400&v=beta&t=UENIvZp_6yRb_9mxsNziJmnQNL-FBJX-aIpQgQ1_mNU" 
          nome="Cristiano Silva" 
          descricao="Oi, Sou o Cristiano Silva Estudante desenvolvimento Web FullStack pela escola de tecnologia Labenu, cursando também Ads e formado em Logística
          minhas experiências profissionais foram na área de logística durante 14 anos, estou em transição de carreira aprendendo e colocando em pratica os conhecimentos adquiridos."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/2026/2026596.png"
          texto="Ver mais"
        />
      </div>

      <div className='DadosGerais'>
        <MeusDados 
        imagem="https://cdn-icons-png.flaticon.com/512/561/561127.png"
        nome="Email: escola@outlook.com"
        />

        <MeusDados 
        imagem="https://cdn-icons-png.flaticon.com/512/1275/1275302.png"
        nome="Endereço: Rua escola 2023"
        />        
      </div>
       

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Loggi" 
          descricao="Desenvolvedor Iniciante" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
