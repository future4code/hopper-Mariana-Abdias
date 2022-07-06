import React from 'react'
import { useGetTrips } from '../services/RequestsApi'
import { useNavigate} from 'react-router-dom'



// Página para vermos todas as viagens

const ListTrips = () => {
  const navigate = useNavigate()

  const trips = useGetTrips()

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <div className="div-buttons">
        <button className="buttons" onClick={() => navigate('/')}>
          Voltar
        </button>
        <button
          className="buttons"
          onClick={() => navigate('/trips/application')}
        >
          Inscrever-se
        </button>
      </div>
      <h1 className="h1-text">Lista de Viagens</h1>
      {trips.length ? (
        trips.map(trip => {
          return (
            <div className="lista-de-viagens" key={trip.id}>
              <p>
                {' '}
                <strong>Nome:</strong> {trip.name}
              </p>
              <p>
                {' '}
                <strong>Descrição:</strong> {trip.description}
              </p>
              <p>
                {' '}
                <strong>Planeta:</strong> {trip.planet}
              </p>
              <p>
                {' '}
                <strong>Duração:</strong> {trip.durationInDays}
              </p>
              <p>
                {' '}
                <strong>Data:</strong> {trip.date}
              </p>
            </div>
          )
        })
      ) : (
        <h4>Carregando....</h4>
      )}
    </div>
  )
}

export default ListTrips
