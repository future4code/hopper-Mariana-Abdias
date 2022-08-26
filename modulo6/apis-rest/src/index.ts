import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { User, baseUsers, USER_ROLE } from './data'

const app = express()
app.use(express.json())
app.use(cors())

let users = baseUsers

// Exercício 1
// a) Método GET
// b) Entidade: /users

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 2

app.get('/users/admin', (req: Request, res: Response) => {
  let errorCode = 500
  try {
    const admin = users.filter(admin => {
      return admin.type === USER_ROLE.ADMIN
    })
    res.status(200).send(admin)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// a) Passei uma entidade nova no path: /users/admin
// Nesse caso somente usuários Admin serão exibidos

// b) Typando o objeto e passando o type pelo ENUM

// Exercício 3
// a) query
// b) alterado para trazer os erros

app.get('/user', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const name = req.query.name as string

    if (!name) {
      errorCode = 422
      throw new Error('Falta o parâmetro de busca!')
    }

    const user = users.find(u => {
      return u.name.toLowerCase() === name.toLowerCase()
    })

    if (!user) {
      errorCode = 404
      throw new Error('Usuário não encontrado')
    }

    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 4
app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, email, type, age } = req.body

    if (!name || !email || !type || !age) {
      errorCode = 422
      throw new Error('Ausência de parâmetros no body')
    }

    if (
      type.toUpperCase() !== USER_ROLE.ADMIN &&
      type.toUpperCase() !== USER_ROLE.NORMAL
    ) {
      errorCode = 422
      throw new Error("Inserir um tipo de usuário válido: 'NORMAL' ou 'ADMIN'")
    }

    const newUser: User = {
      id: Math.random(), // Date.now() ou user.lentgh + 1
      name: name,
      email: email,
      type: type,
      age: age
    }

    users.push(newUser)

    res.status(200).send({ message: 'Usuário criado com sucesso!', users })
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.put('/users/:userId', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const userId = req.params.userId
    const updatedUser = req.body

    users = users.map(user => {
      if (Number(userId) === user.id) {
        return updatedUser
      }

      return user
    })
    return res.status(201).send(updatedUser)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
