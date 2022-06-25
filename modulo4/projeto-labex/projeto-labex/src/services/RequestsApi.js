import { useState, useEffect } from 'react'
import axios from 'axios'
import { baseUrl } from './url'

// Essa requisição retorna todas as viagens.
export function useGetTrips() {
  const [trips, setTrips] = useState([])
  const URL = `${baseUrl}/trips`

  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setTrips(response.data.trips)
        // console.log(response)
      })
      .catch(error => {
        alert(error.response.data.message)
        console.log(error)
      })
  }, [trips])

  return trips
}



// Esse endpoint recebe informações de um candidato e o relaciona a uma viagem.
export const applyToTrip = form => {
  const URL = `${baseUrl}/trips/${form.trip}/apply`
  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }

  axios
    .post(URL, body)
    .then(() => {
      alert('Inscrição feita com sucesso')
    })
    .catch(error => {
      alert(error.response.data.message)
    })
}

// Esse endpoint cria uma nova viagem.
export const createTrip = (body, clear) => {
  const URL = `${baseUrl}/trips/`
  const headers = {
    headers: { auth: localStorage.getItem('token') }
  }

  axios
    .post(URL, body, headers)
    .then(() => {
      alert('Viagem adicionada com sucesso!')
      clear()
    })
    .catch(err => console.log(err))
}

// Este endpoint serve para decidir a aprovação ou não de um candidato para uma viagem.
export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
  const body = {
      approve: decision
  }

  axios.put(`${baseUrl}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
      headers: {auth: localStorage.getItem("token")}
  })
  .then(() => {
      alert("Decisão registrada com sucesso!")
      getTripDetails()
  })
  .catch((err) => alert(err.response.data.message))
}

// Endpoint que deleta uma viagem
export const deleteTrip = id => {
  const URL = `${baseUrl}/trips/${id}`
  const headers = {
    headers: { auth: localStorage.getItem('token') }
  }

  axios
    .delete(URL, headers)
    .then(() => {
      window.confirm('Deseja realmente excluir essa viagem?')
    })
    .catch(error => {
      alert(error.response.data.message)
    })
}
