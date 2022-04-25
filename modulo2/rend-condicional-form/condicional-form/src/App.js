import React from 'react';
import './App.css';
import Pagina1 from './Components/Pagina1';
import Pagina2 from './Components/Pagina2';
import Pagina3 from './Components/Pagina3';
import Pagina4 from './Components/Pagina4';



class App extends React.Component{ 
    state ={
      paginas :1,

    }    

vaParaProximaPagina = () => {
  const novaPg = this.state.paginas +1
  this.setState({paginas: novaPg})
}

    renderizaPagina =()=>{
      switch (this.state.paginas) {
        case 1:
          return  <Pagina1 />;        
        
        case 2:
          return <Pagina2 />;
           
        case 3:
          return <Pagina3 />;
          
        case 4:
          return <Pagina4 />;
          
        default:
          return <p>Página não encontrada</p>
      }
      
    }
  render(){
    return(
      <div className='dadosPagina'>
        {this.renderizaPagina()}

        {this.state.paginas !==4  && (
          <button className='botao' onClick={this.vaParaProximaPagina}>Próxima Etapa</button>
        )}
        
      </div>
    
   )      
  }  
}

export default App

