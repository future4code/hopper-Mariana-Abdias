import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { User, baseUsers } from './data'
import { validate } from './functions/validateAge'

const app = express()
app.use(express.json())
app.use(cors())

let users = baseUsers

app.get('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.post('/users', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { cpf, name, birthDate, balance, extract } = req.body

    if (!cpf || !name || !birthDate) {
      errorCode = 422
      throw new Error('Ausência de parâmetros no body')
    }

    const ageValidade = validate(birthDate)
    if (ageValidade) {
      users.push({ name, cpf, birthDate, balance: 0, extract: [] })
    } else {
      errorCode = 403
      throw new Error(
        'Ops, você não tem 18 anos ainda, não é possível criar uma conta'
      )
    }

    // let CPF = req.query.cpf as string
    // const findUserCpf = users.find(user => user.cpf === CPF)
    // if (findUserCpf) {
    //   errorCode = 409
    //   throw new Error('CPF já existente.')
    // }

    const newUser: User = {
      cpf,
      name,
      birthDate,
      balance,
      extract
    }

    users.push(newUser)

    res.status(200).send({ message: 'Conta criada com sucesso!', users })
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
