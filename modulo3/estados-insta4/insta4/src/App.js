import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';



const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;

  input{
    display: flex;
  }
    
  
`
const ContainerEstilo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  

`

class App extends React.Component {
  state = {
    post: [
    {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Mari",
      fotoUsuario: "https://picsum.photos/50/51",
      fotoPost: "https://picsum.photos/200/151"
    },
    {
      nomeUsuario: "Rafa",
      fotoUsuario: "https://picsum.photos/50/52",
      fotoPost: "https://picsum.photos/200/152"
    }
  ],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost

    };

    const novosPosts = [...this.state.post, novoPost];

    this.setState({
      post: novosPosts,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value})
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})
  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})
  };


    render() {

    const listaDeComponentes = this.state.post.map((post, index) => {
      return(
        
        <Post 
         nomeUsuario = {post.nomeUsuario}
         fotoUsuario = {post.fotoUsuario}
         fotoPost = {post.fotoPost}
         key = {index}
        />  
      
      );
    });  

    return (
      <ContainerInput>
        <ContainerEstilo>
        <input 
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome do Usuário"}
          />
        <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          />
        <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Post"}
          />
        <button onClick={this.adicionaPost}>Adicionar Post</button>
        </ContainerEstilo>
      <div>{listaDeComponentes}</div>
      </ContainerInput>
    );
  }
  
}

export default App;
