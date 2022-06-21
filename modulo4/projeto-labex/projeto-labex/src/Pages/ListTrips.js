import React from 'react'
import { getTrips } from '../services/RequestsApi'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Página para vermos todas as viagens

const ListTrips = () => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState([])

 

  const useGetTrips = async () => {
    const response = await getTrips()
    setTrips(response)
  }

  return (
    <div className="ListTrips">
      <div>
        <button click={() => navigate('/')}>Voltar</button>
        <button click={() => navigate('/trips/application')}>
          Inscrever-se
        </button>
      </div>
      <h1>Lista de Viagens</h1>
      {trips &&
        trips.map(trip => (
          <ul key={trip.id}>
            <li>
              <strong>Nome:</strong>
              {trip.name}
            </li>
            <li>
              <strong>Descrição:</strong>
              {trip.description}
            </li>
            <li>
              <strong>Planeta:</strong>
              {trip.planet}
            </li>
            <li>
              <strong>Duração:</strong>
              {trip.durationInDays}
            </li>
            <li>
              <strong>Data:</strong>
              {trip.date}
            </li>
          </ul>
        ))}
    </div>
  )
}

export default ListTrips
