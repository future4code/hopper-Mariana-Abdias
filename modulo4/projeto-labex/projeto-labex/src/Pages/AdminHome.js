import React from 'react'
import useProtectedPage from '../hooks/useProtectedPage'
import { useNavigate } from 'react-router-dom'
import { useGetTrips, deleteTrip } from '../services/RequestsApi'
import lixeira from '../images/lixeira.png'

// Página para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

const AdminHome = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const trips = useGetTrips()

  const logOut = () => {
    localStorage.setItem('token', '')
    navigate('/login')
  }

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Painel Administrativo</h1>
      <div className="div-buttons">
        <button className="buttons" onClick={() => navigate('/')}>
          Voltar
        </button>
        <button
          className="buttons"
          onClick={() => navigate('/admin/trips/create')}
        >
          Criar Viagem
        </button>
        <button className="buttons" onClick={logOut}>
          Logout
        </button>
      </div>
      <div>
        {trips.length !== 0 ? (
          trips.map(trip => {
            return (
              <div className="admin-lista-viagem" key={trip.id}>
                <div
                  onClick={() => {
                    navigate(`/admin/trips/${trip.id}`)
                  }}
                >
                  {' '}
                  <strong></strong> {trip.name}
                </div>

                <button onClick={() => deleteTrip(trip.id)}>
                  <img className="lixeira" src={lixeira} alt="Lixeira" />
                </button>
              </div>
            )
          })
        ) : (
          <p> Não há viagens disponíveis </p>
        )}
      </div>
    </div>
  )
}

export default AdminHome
