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

const Botao = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  width: 10em;
  padding: 1em;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
    }
  }

  irParaProximaEtapa = () => {
    let soma = (this.state.etapa += 1)
    if (soma <= 4) {
      return this.setState({ etapa: soma })
    }
  }

  render() {
    return (
      <>
        {this.renderizaEtapa()}
        {this.state.etapa <= 3 ? (
          <>
            <Botao>
              <button onClick={this.irParaProximaEtapa}>Continuar</button>
            </Botao>
          </>
        ) : null}
      </>
    )
  }
}

export default App
