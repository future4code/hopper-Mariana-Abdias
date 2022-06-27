import React from 'react'
import { useGetTrips, applyToTrip } from '../services/RequestsApi'
import { countries } from '../Components/countries'
import { useNavigate } from 'react-router-dom'
import useForms from '../hooks/useForms'

// Página para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

function AplicationForm() {
  const { form, onChange, cleanFields } = useForms({
    applicationText: '',
    profession: '',
    country: '',
    age: '',
    name: '',
    id: ''
  })

  const navigate = useNavigate()
  const trips = useGetTrips()

  const sendForm = event => {
    event.preventDefault()
    applyToTrip(form)
    cleanFields()
  }

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Inscreva-se para uma viagem</h1>
      <form className="form-styled" onSubmit={sendForm}>
        <select defaultValue="" onChange={onChange} name={'trip'}>
          <option value="" disabled>
            Escolha uma Viagem
          </option>

          {trips.map(trip => {
            return (
              <option value={trip.id} key={trip.id}>
                {trip.name}
              </option>
            )
          })}
        </select>
        <input
          placeholder={'Nome'}
          name={'name'}
          value={form.name}
          onChange={onChange}
          pattern={'^.{3,}$'}
          title={'O nome deve ter no mínimo 3 caracteres'}
          required
        />
        <input
          placeholder={'Idade'}
          type={'number'}
          name={'age'}
          value={form.age}
          onChange={onChange}
          required
          min={18}
        />
        <input
          placeholder={'Texto de Candidatura'}
          name={'applicationText'}
          value={form.applicationText}
          onChange={onChange}
          required
          pattern={'^.{30,}$'}
          title={'O texto deve ter no mínimo 30 caracteres'}
        />
        <input
          placeholder={'Profissão'}
          name={'profession'}
          value={form.profession}
          onChange={onChange}
          required
          pattern={'^.{10,}$'}
          title={'A profissão deve ter no mínimo 10 caracteres'}
        />
        <select
          placeholder={'País'}
          name={'country'}
          value={form.country}
          onChange={onChange}
          required
        >
          <option value="" disabled>
            Escolha um País
          </option>
          {countries.map(country => {
            return (
              <option value={country} key={country}>
                {country}
              </option>
            )
          })}
        </select>

        <div className="div-buttons">
          <button className="buttons" onClick={() => navigate('/trips/list')}>
            Voltar
          </button>
          <button className="buttons" type={'submit'}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default AplicationForm
