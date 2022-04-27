import React from 'react';
import styled from 'styled-components';
import Whatslab from './Componentes/Whatslab';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Whatslab>
          <h1>Olá</h1>
        </Whatslab>
        
      </MainContainer>
    );
  }
}

export default App;