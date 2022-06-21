import React from 'react'
import { useNavigate } from 'react-router-dom'

// Página para o usuário escolher entre Área Administrativa e Lista de Viagens

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home-styled">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <div className="buttons-home">
        <button
          className="button-principal"
          onClick={() => navigate('/trips/list')}
        >
          Ver Viagens
        </button>
        <button
          className="button-principal"
          onClick={() => navigate('/admin/trips/list')}
        >
          Administrador
        </button>
      </div>
    </div>
  )
}

export default Home
