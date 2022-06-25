import React from 'react'
import { createTrip } from '../services/RequestsApi'
import useForms from '../hooks/useForms'
import { planets } from '../hooks/planets'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../hooks/useProtectedPage'

// Página Formulário para o administrador criar uma nova viagem

const CreateTrip = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForms({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  })

  const date = new Date()
  const minDate =
    date.getFullYear() +
    '-' +
    ('0' + (date.getMonth() + 1)).substr(-2) +
    '-' +
    ('0' + date.getDate()).substr(-2)

  const submitCreationTrip = event => {
    event.preventDefault()
    createTrip(form, cleanFields)
    console.log('Formulário enviado!', form)
  }

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Criar Viagem</h1>
      <form className="form-styled" onSubmit={submitCreationTrip}>
        <input
          placeholder={'Nome da Viagem'}
          name={'name'}
          value={form.name}
          onChange={onChange}
          pattern={'^.{3,}$'}
          title={'O nome da viagem deve ter no mínimo 3 caracteres'}
          required
        />
        <select
          placeholder={'Planeta'}
          name={'planet'}
          value={form.planet}
          onChange={onChange}
          required
        >
          <option value={''} disabled>
            Escolha um Planeta
          </option>
          {planets.map(planet => {
            return (
              <option value={planet} key={planet}>
                {planet}
              </option>
            )
          })}
        </select>
        <input
          placeholder={'Data'}
          type={'date'}
          name={'date'}
          value={form.date}
          onChange={onChange}
          required
          min={minDate}
        />
        <input
          placeholder={'Descrição'}
          name={'description'}
          value={form.description}
          onChange={onChange}
          required
          pattern={'^.{30,}$'}
          title={'O nome deve ter no mínimo 30 caracteres'}
        />
        <input
          placeholder={'Duração em dias'}
          type={'number'}
          name={'durationInDays'}
          value={form.durationInDays}
          onChange={onChange}
          required
          min={50}
        />

        <div className="div-buttons">
          <button
            className="buttons"
            onClick={() => navigate('/admin/trips/list')}
          >
            Voltar
          </button>
          <button className="buttons" type={'submit'}>
            Criar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTrip
