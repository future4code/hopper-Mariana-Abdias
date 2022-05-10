import React from 'react'
import styled from 'styled-components'

const ContainerEtapa2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 20px;

  ol {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1.2em;
    margin: 0;
  }

  input {
    width: 100%;
    height: 2em;
    border-radius: 10px;
  }
`

class Etapa2 extends React.Component {
  render() {
    return (
      <ContainerEtapa2>
        <div>
          <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        </div>
        <ol>
          <p>5. Qual o curso?</p>
          <input></input>
          <p>6. Qual a unidade de ensino?</p>
          <input></input>
        </ol>
      </ContainerEtapa2>
    )
  }
}

export default Etapa2
