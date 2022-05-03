import React from 'react'
import styled from 'styled-components'

const ContainerEtapa3 = styled.div`
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
    font-size: 1.5em;
    margin: 0;
  }

  input {
    width: 100%;
    height: 2em;
    border-radius: 10px;
  }
`

class Etapa3 extends React.Component {
  render() {
    return (
      <ContainerEtapa3>
        <div>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        </div>
        <ol>
          <p>5. Porque você não terminou o curso de graduação?</p>
          <input></input>
          <p>6. Você fez algum curso complementar?</p>
          <input></input>
        </ol>
      </ContainerEtapa3>
    )
  }
}

export default Etapa3
