import React from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../services/url'
import useForms from '../hooks/useForms'
import axios from 'axios'
import useUnProtectedPage from '../hooks/useUnProtectedPage'

// Página para fazermos login como administrador
function Login() {
  useUnProtectedPage()
  const { form, onChange, cleanFields } = useForms({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const onSubmitLogin = event => {
    event.preventDefault()
    const body = {
      email: form.email,
      password: form.password
    }

    axios
      .post(`${baseUrl}/login`, body)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        navigate('/admin/trips/list')
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response.data)
      })
    cleanFields()
  }

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Login</h1>
      <form className="form-styled-login" onSubmit={onSubmitLogin}>
        <input
          placeholder={'E-mail'}
          type={'email'}
          name={'email'}
          value={form.email}
          onChange={onChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <input
          placeholder={'Senha'}
          type={'password'}
          name={'password'}
          value={form.password}
          onChange={onChange}
          pattern=".{3,}"
          title="Deve conter no mínimo 3 letras"
          required
        />

        <div className="div-buttons">
          <button className="buttons" onClick={() => navigate('/')}>
            Voltar
          </button>
          <button className="buttons" type={'submit'}>
            Entrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
