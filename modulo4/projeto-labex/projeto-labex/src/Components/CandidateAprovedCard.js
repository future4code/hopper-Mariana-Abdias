import React from 'react'

export default function CandidateAprovedCard(props) {
  const candidates = props.trip.approved

  return (
    <div>
      {candidates ? (
        candidates.map(candidate => {
          return (
            <div className="lista-de-candidatos-aprovados" key={candidate.id}>
              <p>
                <strong>Nome:</strong> {candidate.name}{' '}
              </p>
            </div>
          )
        })
      ) : (
        <p>Não há candidatos aprovados</p>
      )}
    </div>
  )
}
