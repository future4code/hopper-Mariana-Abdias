import React from 'react'
import styled from 'styled-components'


const WhatsContainer = styled.div`
  border: 1px solid gray;
  width: 600px;
  height: 98vh;
  display: flex;
  
`

const WhatsHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  
`

const WhatsFooter = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
    input{
        width: 265px
  }
`




class Whatslab extends React.Component {
  state = {
        usuario: '',
        mensagem: ''
  }

  onChangeUsuario = (event) => {
     this.setState({usuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagem: event.target.value})
 }

  render(){
    
    return <WhatsContainer>
      <WhatsHeader>
      
      </WhatsHeader>

 

      <WhatsFooter>
            <input
                placeholder="Usuário"
                value={this.state.usuario}
                onChange={this.onChangeUsuario}
            />
            <input
                placeholder="Mensagem"
                value={this.state.mensagem}
                onChange={this.onChangeMensagem}
            />
            <button>Enviar</button>
        
      </WhatsFooter>
     
    </WhatsContainer>
    
  }
}

export default Whatslab 