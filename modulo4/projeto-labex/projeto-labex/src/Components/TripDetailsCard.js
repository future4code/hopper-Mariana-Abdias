import React from 'react'

export default function TripDetailsCard(props) {
  const trip = props.trip

  return (
    <div>
      {trip && (
        <div className="lista-de-viagens">
          <p>
            <strong>Nome:</strong> {trip.name}
          </p>
          <p>
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
            <strong>Data:</strong> {trip.date}
          </p>
        </div>
      )}
    </div>
  )
}
