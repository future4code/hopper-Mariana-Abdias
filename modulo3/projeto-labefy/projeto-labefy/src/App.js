import React from 'react'
import axios from 'axios'
// import styled from 'styled-components'
import './App.css'
import logo from './imagens/logo-principal.png'
import apagar from './imagens/apagar.png'
import criar from './imagens/criar.png'
import tocar from './imagens/tocar.png'

class App extends React.Component {
  state = {
    playlist: [],
    inputPlaylist: '',
    musicas: [],
    inputMusicas: '',
    inputArtistas: '',
    inputUrl: '',
    idPlaylist: '',
    tocarAgora: false,
    tocarMusica: {}
  }

  componentDidMount() {
    this.renderizarPlaylist()
  }

  renderizarPlaylist = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(response => {
        this.setState({ playlist: response.data.result.list })
      })
      .catch(err => {
        alert(err.response.data)
      })
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }

    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        body,
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(() => {
        this.setState({ inputPlaylist: '' })
        this.renderizarPlaylist()
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  onChangePlaylist = event => {
    this.setState({ inputPlaylist: event.target.value })
  }

  criarMusicas = () => {
    const body = {
      name: this.state.inputMusicas,
      artist: this.state.inputArtistas,
      url: this.state.inputUrl
    }

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idPlaylist}/tracks`,
        body,
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(() => {
        this.setState({ inputMusicas: '', inputArtistas: '', inputUrl: '' })
        alert('Música adicionada com sucesso!')
        this.selecionaPlaylist(this.state.idPlaylist)
      })
      .catch(err => {
        console.log(err.response.data)
        alert('Ops, Erro ao adicionar a Música!')
      })
  }

  buscaIdPlaylist = id => {
    this.setState({
      criarMusicas: !this.state.criarMusicas,
      idPlaylist: id
    })
  }

  selecionaPlaylist = id => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(response => {
        this.setState({ musicas: response.data.result.list, idPlaylist: id })
      })
      .catch(err => {
        alert(err.response.data)
      })
  }

  onChangeMusicas = event => {
    this.setState({ inputMusicas: event.target.value })
  }

  onChangeArtistas = event => {
    this.setState({ inputArtistas: event.target.value })
  }

  onChangeUrl = event => {
    this.setState({ inputUrl: event.target.value })
  }

  deletaPlaylist = id => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(response => {
        alert('Playlist excluída com sucesso!')
        this.renderizarPlaylist()
      })
      .catch(error => {
        console.log(error)
        alert('Ops, aconteceu um erro ao excluir a Playlist!')
      })
  }

  tocarMusicas = music => {
    this.setState({
      tocarAgora: music,
      tocarMusica: !this.state.tocarMusica
    })
  }

  deletaMusicas = (idPlay, idMusic) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlay}/tracks/${idMusic}`,
        {
          headers: {
            Authorization: 'mariana-goncalves-hopper'
          }
        }
      )
      .then(() => {
        this.selecionaPlaylist(this.state.idPlaylist)
        alert('Música excluída com sucesso!')
      })
      .catch(error => {
        alert('Ops, aconteceu um erro ao excluir Música!')
      })
  }

  render() {
    return (
      <body>
        <header className="header">
          <div className="logo">
            <img className="logo-img" src={logo} alt="Logotipo do Labefy" />
            <h3 className="h3-gradiente">Labefy</h3>
          </div>
          <div className="texto-header">
            <p className="p-gradiente">Uma experiência incrível</p>
          </div>
        </header>
        <main className="main">
          <div>
            <div className="criar-playlist">
              <p className="p-gradiente">Crie sua Playlist</p>
              <div>
                <input
                  placeholder="Insira o nome da playlist"
                  value={this.state.inputPlaylist}
                  onChange={this.onChangePlaylist}
                  type="text"
                />
                <button onClick={this.criarPlaylist}>Criar Playlist</button>
              </div>
            </div>
            {this.state.criarMusicas && (
              <div className="criar-playlist">
                <p className="p-gradiente">Adicione suas músicas</p>
                <div>
                  <input
                    placeholder="Insira o nome da Música"
                    value={this.state.inputMusicas}
                    onChange={this.onChangeMusicas}
                    type="text"
                  />
                  <input
                    placeholder="Insira o nome do Artista"
                    value={this.state.inputArtistas}
                    onChange={this.onChangeArtistas}
                    type="text"
                  />
                  <input
                    placeholder="Insira a url da Música"
                    value={this.state.inputUrl}
                    onChange={this.onChangeUrl}
                    type="url"
                  />
                </div>
                <button onClick={this.criarMusicas}>Adicionar Músicas</button>
              </div>
            )}
            {this.state.tocarMusica && (
              <div className="tocar-musica">
                <div>
                  <p className="p-gradiente">Tocando Música</p>
                  <p>{this.state.tocarAgora.name}</p>
                </div>
                <div>
                  <audio autoplay="autoplay" controls="controls">
                    <source src={this.state.tocarAgora.url}></source>
                  </audio>
                </div>
              </div>
            )}
          </div>
          <div className="playlists-criadas">
            <p className="p-gradiente">Suas Playlists</p>
            <div>
              {this.state.playlist.map(play => {
                return (
                  <div key={play.id}>
                    <p onClick={() => this.selecionaPlaylist(play.id)}>
                      {play.name}
                    </p>
                    <img
                      src={criar}
                      width="20vh"
                      onClick={() => this.buscaIdPlaylist(play.id)}
                    />
                    <img
                      src={apagar}
                      width="20vh"
                      onClick={() => this.deletaPlaylist(play.id)}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="musicas-criadas">
            <p className="p-gradiente">Suas Músicas</p>
            <div>
              {this.state.musicas.map(musica => {
                return (
                  <div key={musica.id}>
                    <p>
                      {musica.name} - {musica.artist}
                    </p>
                    <img
                      src={tocar}
                      width="20vh"
                      onClick={() => this.tocarMusicas(musica)}
                    />
                    <img
                      src={apagar}
                      width="20vh"
                      onClick={() => this.deletaMusicas(musica.id)}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </main>
        <footer className="footer">
          <p className="p-gradiente">
            © 2022 Labefy | by Mariana Abdias Gonçalves
          </p>
        </footer>
      </body>
    )
  }
}

export default App
