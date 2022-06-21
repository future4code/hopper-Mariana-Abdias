import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../services/url'
import axios from 'axios'

// Página para fazermos login como administrador
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: password
    }

    axios
      .post(baseUrl, body)
      .then(response => {
        localStorage.setItem('token', response.data.token)
        navigate('/tripDetails')
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  return (
    <div className="styled-pages">
      <p className="p-text-principal">
        LABE<span>X</span>
      </p>
      <h1 className="h1-text">Login</h1>
      <form className="form-styled-login">
        <input
          placeholder={'E-mail'}
          type={'email'}
          name={'email'}
          value={email}
          onChange={onChangeEmail}
          required
        />
        <input
          placeholder={'Senha'}
          type={'password'}
          name={'password'}
          value={password}
          onChange={onChangePassword}
          required
        />
      </form>
      <div className="div-buttons">
        <button className="buttons" onClick={() => navigate('/admin/trips/list')}>Voltar</button>
        <button className="buttons" type={'submit'} onClick={onSubmitLogin}>
          Entrar
        </button>
      </div>
    </div>
  )
}

export default Login