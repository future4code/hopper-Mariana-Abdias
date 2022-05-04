import React from 'react'
import styled from 'styled-components'

const ContainerFinal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 20px;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1.2em;
    margin: 0;
  }
`

class Final extends React.Component {
  render() {
    return (
      <ContainerFinal>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigada por participar! Entraremos em contato!</p>
      </ContainerFinal>
    )
  }
}
export default Final
