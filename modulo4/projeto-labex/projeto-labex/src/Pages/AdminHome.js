import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'

// Página para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

const AdminHome = () => {
  // useProtectedPage()
  const navigate = useNavigate()
  return (
    <>
      <h1>Painel Administrativo</h1>
      <div>
        <button onClick={() => navigate('/')}>Voltar</button>
        <button onClick={() => navigate('/admin/trips/create')}>
          Criar Viagem
        </button>
        <button onClick={() => navigate('/login')}>Logout</button>
      </div>
    </>
  )
}

export default AdminHome
