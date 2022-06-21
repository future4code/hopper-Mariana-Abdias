import React from 'react'
import { useNavigate } from 'react-router-dom'

// Página para fazermos login como administrador
function Login() {
  const navigate = useNavigate()
  return (
    <div className="Login">
      <h1>Login</h1>
      <form>
        <input
          placeholder={'E-mail'}
          type={'email'}
          name={'email'}
          value=""
          onChange=""
          required
        />
        <input
          placeholder={'Senha'}
          type={'password'}
          name={'password'}
          value=""
          onChange=""
          required
        />
        <buttons>
          <button click={() => navigate('/')}>Voltar</button>
          <button type={'submit'}>Entrar</button>
        </buttons>
      </form>
    </div>
  )
}

export default Login
