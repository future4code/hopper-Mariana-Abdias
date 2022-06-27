import React, { useState, useEffect } from 'react'
// import useRequest from '../hooks/useRequest'
import axios from 'axios'
import useProtectedPage from '../hooks/useProtectedPage'
import { useParams, useNavigate } from 'react-router-dom'
import CandidateAprovedCard from '../Components/CandidateAprovedCard'
import CandidateReprovedCard from '../Components/CandidateReprovedCard'
import TripDetailsCard from '../Components/TripDetailsCard'
import { baseUrl } from '../services/url'

// Página para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

function TripDetais(props) {
  useProtectedPage()
  const navigate = useNavigate()
  const [trip, setTrip] = useState({})
  const params = useParams()

  // const [trip] = useRequest(`/trip/${id}`)

  const headers = {
    headers: { auth: localStorage.getItem('token') }
  }

  const getTripDetails = () => {
    const URL = `${baseUrl}/trip/${params.id}`

    axios
      .get(URL, headers)
      .then(res => {
        setTrip(res.data.trip)
      })
      .catch(err => {
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    getTripDetails()
  }, [trip])

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
        <h1 className="h1-text">Viagens</h1>
        <div>
          <TripDetailsCard trip={trip} />

          <h1 className="h2-text">Candidatos Pendentes</h1>
          <CandidateReprovedCard trip={trip} headers={headers} id={params.id} />

          <h1 className="h2-text">Candidatos Aprovados</h1>
          <CandidateAprovedCard trip={trip} />
        </div>
      </div>
    </div>
  )
}

export default TripDetais
