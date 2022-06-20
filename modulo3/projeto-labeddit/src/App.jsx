import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import { createGlobalStyle } from "styled-components"
 import Button from "@mui/material/Button"; 




const GlobalStyle = createGlobalStyle `

  body{
    margin:0;
    padding:0;
    background-color: #1F2833;
    color: #66FCF1;
  }

  input, label{
    border-radius: 5px;
    height:1.5rem;
    width:90%;
    margin:auto;
    position:relative;
  }
  button{
    border-radius: 5px;
    height:1.8rem;
    width:18rem;
    background: linear-gradient(to left, #21d4fd, #b721ff);



    &:hover{
      
      background: linear-gradient(to left, #b721ff, #21d4fd );
      color: white;
      cursor: pointer;
      transition: .3s ease-in-out;
      
  }
  }



`

function App() {
  return (

   <>
      <GlobalStyle>
        <Button variant="contained" color="primary"></Button>  
      </GlobalStyle>     

      <GlobalState>
        <Router />
      </GlobalState>

  {/*     <Button variant="contained" color="primary">
         Hello World
      </Button> */}
    
   </>

    
    
    
  );
}

export default App;
