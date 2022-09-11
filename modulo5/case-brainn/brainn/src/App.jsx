import Router from './routes/Router';
import GlobalState from './global/GlobalState';
import styled from 'styled-components';

export const BODY = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: #6befa3;

  option {
    font-family: 'Montserrat', sans-serif;
  }

  main {
    display: flex;
    margin: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #6befa3;
  }
`

function App() {
  return (
    <BODY>
      <GlobalState>
        <Router />
      </GlobalState>
    </BODY>
  );
}

export default App;
