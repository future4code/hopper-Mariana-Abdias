import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/bank', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    res.status(200).send('Projeto configurado e pronto para ser iniciado')
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
