import React from 'react'
import { planets } from '../hooks/planets'

// Página Formulário para o administrador criar uma nova viagem

function CreateTrip() {
  return (
    <div className="CreateTrip">
      <h1>Criar Viagem</h1>
      <form>
        <input
          placeholder={'Nome'}
          name={'name'}
          value=""
          onChange=""
          pattern={'^.{5,}$'}
          title={'O nome da viagem deve ter no mínimo 5 caracteres'}
          required
        />
        <select
          placeholder={'Planeta'}
          name={'planet'}
          defaultValue={''}
          onChange=""
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
          value=""
          onChange=""
          required
          min=""
        />
        <input
          placeholder={'Descrição'}
          name={'description'}
          value=""
          onChange=""
          required
          pattern={'^.{30,}$'}
          title={'O nome deve ter no mínimo 30 caracteres'}
        />
        <input
          placeholder={'Duração em dias'}
          type={'number'}
          name={'durationInDays'}
          value=""
          onChange=""
          required
          min={50}
        />
        <div>
          <button>Voltar</button>
          <button type={'submit'}>Criar</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTrip
