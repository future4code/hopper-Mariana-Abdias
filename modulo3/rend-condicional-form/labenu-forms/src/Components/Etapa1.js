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
    font-size: 1.2em;
    margin: 0;
  }

  input {
    width: 100%;
    height: 2em;
    border-radius: 10px;
  }

  select {
    width: 20em;
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
          <select>
            <option value="Ensino Médio Incompleto">
              Ensino Médio Incompleto
            </option>
            <option value="Ensino Médio Completo">Ensino Médio Completo</option>
            <option value="Ensino Superior Incompleto">
              Ensino Superior Incompleto
            </option>
            <option value="Ensino Superior Completo">
              Ensino Superior Completo
            </option>
          </select>
        </ol>
      </ContainerEtapa1>
    )
  }
}

export default Etapa1
