import express, { Request, Response } from "express";
import cors from 'cors'

import { baseProducts } from './data'

import { AddressInfo } from "net";

const app = express()

app.use(express.json())
app.use(cors())

let products = baseProducts

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

// Exercício 1:
app.get("/teste", (request: Request, response: Response) => {
            
  response.status(200).send("Teste realizado com sucesso")
})

// Exercício 2:
// Criado o Array de Produtos no arquivo data.ts

// Exercício 3:
app.post("/produtos",(req:Request,res:Response)=>{

  const newProduct = req.body

  products.push(newProduct)
  return res.status(201).send(newProduct)
})

// Exercício 4:
app.get('/produtos', (req:Request, res:Response) => {
  return res.send(products)
})

// Exercício 5:
app.put('/produtos/:productId', (req:Request, res:Response) => {
  const productId = req.params.productId
  const updatedProduct = req.body

  products = products.map(product => {

    if (productId === product.id) {
      return updatedProduct
    }

    return product
  })
  return res.status(201).send(updatedProduct)
})

// Exercício 6:
app.delete('/produtos/:productId', (req:Request, res:Response) => {
  const productId = req.params.productId

  products = products.filter(product => product.id !== productId)

  return res.status(200).send()
})

// Exercício 7: Exercício 3 Refatorado
app.post("/produtos",(req:Request,res:Response)=>{
  let statusCode = 500
  const newProduct = req.body

  try {
    
    if (!newProduct) {
      statusCode = 422
      throw new Error("É necessário informar um produto")
    }

    const product = products.find(product => product.name.toLocaleLowerCase() === (newProduct.name as string).toLowerCase())

        if (product) {
            statusCode = 409
            throw new Error("Produto já existe")
        }

    products.push(newProduct)

    return res.status(201).send("Playlist criada com sucesso")

  } catch (error) {
    res.status(statusCode).send(error.message)
  }
  })

 // Exercício 9
 app.delete('/produtos/:productId', (req:Request, res:Response) => {
  const productId = req.params.productId

  if (!productId) {
    res.status(400).send("Id obrigatório")
  }

  products = products.filter(product => product.id !== productId)

  return res.status(200).send()
})