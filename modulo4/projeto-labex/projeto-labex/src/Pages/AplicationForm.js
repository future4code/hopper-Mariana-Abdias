import React from 'react'
import { countries } from '../hooks/countries'
import { useNavigate } from 'react-router-dom'

// Página para o usuário se candidatar à viagens, página que vai ter o formulário de inscrição

function AplicationForm() {
  const navigate = useNavigate()
  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Inscreva-se para uma viagem</h1>
      <form className="form-styled">
        <select defaultValue="" onChange="">
          <option value="" disabled>
            Escolha uma Viagem
          </option>
        </select>
        <input
          placeholder={'Nome'}
          name={'name'}
          value=""
          onChange=""
          pattern={'^.{3,}$'}
          title={'O nome deve ter no mínimo 3 caracteres'}
          required
        />
        <input
          placeholder={'Idade'}
          type={'number'}
          name={'age'}
          value=""
          onChange=""
          required
          min={18}
        />
        <input
          placeholder={'Texto de Candidatura'}
          name={'applicationText'}
          value=""
          onChange=""
          required
          pattern={'^.{30,}$'}
          title={'O texto deve ter no mínimo 30 caracteres'}
        />
        <input
          placeholder={'Profissão'}
          name={'profession'}
          value=""
          onChange=""
          required
          pattern={'^.{10,}$'}
          title={'A profissão deve ter no mínimo 10 caracteres'}
        />
        <select
          placeholder={'País'}
          name={'country'}
          value=""
          onChange=""
          required
        >
          <option value={''} disabled>
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
      </form>
      <div className="div-buttons">
        <button className="buttons" onClick={() => navigate('/trips/list')}>
          Voltar
        </button>
        <button className="buttons" type={'submit'}>
          Enviar
        </button>
      </div>
    </div>
  )
}

export default AplicationForm