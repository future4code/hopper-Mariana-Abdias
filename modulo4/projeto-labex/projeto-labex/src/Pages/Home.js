import React from 'react'
import { useNavigate } from 'react-router-dom'

// Página para o usuário escolher entre Área Administrativa e Lista de Viagens

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1>LABEX</h1>
      <div>
        <button onClick={() => navigate('/trips/list')}>Ver Viagens</button>
        <button onClick={() => navigate('/admin/trips/list')}>
          Administrador
        </button>
      </div>
    </>
  )
}

export default Home
