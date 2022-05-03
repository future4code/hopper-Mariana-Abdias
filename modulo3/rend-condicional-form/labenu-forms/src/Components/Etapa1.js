import React from 'react'
import styled from 'styled-components'

const ContainerEtapa1 = styled.div`
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

class Etapa1 extends React.Component {
  render() {
    return (
      <ContainerEtapa1>
        <div>
          <h1>ETAPA 1 - DADOS GERAIS</h1>
        </div>
        <ol>
          <p>1. Qual o seu nome?</p>
          <input></input>
          <p>2. Qual sua idade?</p>
          <input></input>
          <p>3. Qual seu e-mail?</p>
          <input></input>
          <p>4. Qual sua escolaridade?</p>
          <input></input>
        </ol>
      </ContainerEtapa1>
    )
  }
}

export default Etapa1
