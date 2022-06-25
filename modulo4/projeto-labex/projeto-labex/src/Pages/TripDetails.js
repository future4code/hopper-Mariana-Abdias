import { React } from 'react'
import useRequest from '../hooks/useRequest'
import useProtectedPage from '../hooks/useProtectedPage'
import { useParams, useNavigate } from 'react-router-dom'

// Página para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

function TripDetais(props) {
  useProtectedPage()
  const navigate = useNavigate()
  const { id } = useParams()

  const [tripDetails, getTripDetails] = useRequest(`/trip/${id}`)

  const candidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.candidates.map(c => {
      return <p key={c.id} candidate={c} getTripDetails={getTripDetails} />
    })

  const approvedCandidates =
    tripDetails &&
    tripDetails.trip &&
    tripDetails.trip.approved.map(c => {
      return <li key={c.id}>{c.name}</li>
    })

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <div className="div-buttons">
        <button
          className="buttons"
          onClick={() => navigate('/admin/trips/list')}
        >
          Voltar
        </button>
      </div>
      <div>
        {tripDetails && tripDetails.trip ? (
          <div key={tripDetails.trip.id}>
            <h1 className="h1-text">{tripDetails.trip.name}</h1>
            <div className="lista-de-viagens">
              <p>
                {' '}
                <strong>Nome:</strong> {tripDetails.trip.name}
              </p>
              <p>
                {' '}
                <strong>Descrição:</strong> {tripDetails.trip.description}
              </p>
              <p>
                {' '}
                <strong>Planeta:</strong> {tripDetails.trip.planet}
              </p>
              <p>
                {' '}
                <strong>Duração:</strong> {tripDetails.trip.durationInDays}
              </p>
              <p>
                {' '}
                <strong>Data:</strong> {tripDetails.trip.date}
              </p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <h1 className="h2-text">Candidatos Pendentes</h1>
        {candidates && candidates.length > 0 ? (
          candidates
        ) : (
          <p>Não há candidatos pendentes</p>
        )}
      </div>

      <div>
        <h1 className="h2-text">Candidatos Aprovados</h1>
        {approvedCandidates && approvedCandidates.length > 0 ? (
          approvedCandidates
        ) : (
          <p>Não há candidatos aprovados</p>
        )}
      </div>
    </div>
  )
}

export default TripDetais
