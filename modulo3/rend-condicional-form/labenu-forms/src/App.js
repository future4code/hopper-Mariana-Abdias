import React from 'react'
import styled from 'styled-components'
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Etapa1 />
        <Etapa2 />
        <Etapa3 />
        <Final />
      </MainContainer>
    )
  }
}

export default App
