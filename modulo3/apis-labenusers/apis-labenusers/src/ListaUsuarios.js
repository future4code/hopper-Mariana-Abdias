import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import './App.css'

class ListaUsuarios extends React.Component {
  state = {
    cadastros: [],
    id: '',
    name: ''
  }

  componentDidMount() {
    this.exibirCadastro()
  }

  exibirCadastro = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(response => {
        this.setState({ cadastros: response.data })
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  deletaUsuario = id => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(() => {
        alert('Usuário apagado com sucesso!')
      })
      .catch(error => {
        alert('Ops, não foi possível apagar esse usuário!')
      })
  }

  render() {
    return (
      <div className="lista">
        <div>
          <ul>
            {this.state.cadastros.map((nomes, index) => {
              return (
                <li key={index}>
                  {nomes.name} {nomes.email}
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126468.png"
                    onClick={() => this.deletaUsuario(nomes.id)}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ListaUsuarios
