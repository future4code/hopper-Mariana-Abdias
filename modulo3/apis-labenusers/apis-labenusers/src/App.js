import React from 'react'
import CadastraUsuario from './CadastraUsuario'
import ListaUsuarios from './ListaUsuarios'
import styled from 'styled-components'
import './App.css'

class App extends React.Component {
  state = {
    telaExibir: 'Cadastro'
  }

  trocarDeTela = () => {
    if (this.state.telaExibir === 'Cadastro') {
      this.setState({ telaExibir: 'Lista' })
    } else {
      this.setState({ telaExibir: 'Cadastro' })
    }
  }

  render() {
    return (
      <div>
        <button className="troca-tela" onClick={this.trocarDeTela}>
          Trocar de tela
        </button>
        {this.state.telaExibir === 'Cadastro' ? (
          <CadastraUsuario />
        ) : (
          <ListaUsuarios />
        )}
      </div>
    )
  }
}

export default App
