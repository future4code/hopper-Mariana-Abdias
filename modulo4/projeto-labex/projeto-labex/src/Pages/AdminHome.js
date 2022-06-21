import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'

// Página para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

const AdminHome = () => {
  // useProtectedPage()
  const navigate = useNavigate()
  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Painel Administrativo</h1>
      <div className="div-buttons">
        <button className="buttons" onClick={() => navigate('/')}>Voltar</button>
        <button className="buttons" onClick={() => navigate('/admin/trips/create')}>
          Criar Viagem
        </button>
        <button className="buttons" onClick={() => navigate('/login')}>Logout</button>
      </div>
    </div>
  )
}

export default AdminHome
