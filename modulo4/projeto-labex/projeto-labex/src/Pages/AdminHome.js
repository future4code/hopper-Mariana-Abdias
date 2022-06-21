import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'

// Página para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

const AdminHome = () => {
  // useProtectedPage()

  return (
    <>
      <h1>Painel Administrativo</h1>
      <div>
        <button>Voltar</button>
        <button>Criar Viagem</button>
        <button>Logout</button>
      </div>
    </>
  )
}

export default AdminHome
