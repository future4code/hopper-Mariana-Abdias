import express, { Request, Response } from 'express'
import cors from 'cors'
import connection from './database/connection'
import { Produto, Usuario } from './types'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1:

app.get('/produtos', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search

    if (search) {
      const result = await connection.raw(`
        SELECT * FROM Produtos
        WHERE nome = "${search}";
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM Produtos;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/usuarios', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const search = req.query.search

    if (search) {
      const result = await connection.raw(`
        SELECT * FROM funcionarios
        WHERE nome = "${search}";
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM funcionarios;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 2:

app.post('/produtos', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { nome, preco, categoria } = req.body

    if (!nome || !preco || !categoria) {
      throw new Error('Passe o nome, preço e categoria do produto')
    }

    const produtos = await connection.raw(`
      SELECT * FROM Produtos
    `)

    const novoProduto: Produto = {
      id: Number(produtos[0].length + 1),
      nome,
      preco,
      categoria
    }

    await connection.raw(`
      INSERT INTO Produtos(id, nome, preco, categoria)
      VALUES(${novoProduto.id}, "${novoProduto.nome}", ${novoProduto.preco}, "${novoProduto.categoria}")
    `)

    res.status(200).send('Produto adicionado')
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post('/usuarios', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { nome, email } = req.body

    if (!nome || !email) {
      throw new Error('Passe o nome, preço e categoria do produto')
    }

    const usuarios = await connection.raw(`
    SELECT * FROM funcionarios
  `)

    const novoUsuario: Usuario = {
      id: Number(usuarios[0].length + 1),
      nome,
      email
    }

    await connection.raw(`
      INSERT INTO funcionarios(id, nome, email)
      VALUES("${novoUsuario.id}", "${novoUsuario.nome}", "${novoUsuario.email}")
    `)

    res.status(200).send('Usuário adicionado')
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

// Exercício 3:

app.put("/produto/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const preco = Number(req.body.preco)

    const produtos = await connection.raw(`
      SELECT * FROM Produtos
      WHERE id = ${id};
    `)

    if (produtos[0].length === 0) {
      throw new Error("Produto não encontrado")
    }

    if (!preco) {
      throw new Error("É necessário passar o novo preço")
    }

    await connection.raw(`
    UPDATE Produtos
    SET preco = ${preco}
    WHERE id = ${id};
  `)

    res.status(200).send("Preço alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})


app.put("/usuario/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const email = req.body.email

    const usuarios = await connection.raw(`
      SELECT * FROM funcionarios
      WHERE id = ${id};
    `)

    if (usuarios[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    if (!email) {
      throw new Error("É necessário informar o novo email")
    }

    await connection.raw(`
    UPDATE funcionarios
    SET email = ${email}
    WHERE id = ${id};
  `)

    res.status(200).send("Email alterado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }

})


// Exercício 4: 

app.delete("/produto/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const produtos = await connection.raw(`
      SELECT * FROM Produtos
      WHERE id = ${id};
    `)

    if (produtos[0].length === 0) {
      throw new Error("Produto não encontrado")
    }

    await connection.raw(`
      DELETE FROM Produtos
      WHERE id = ${id};
    `)

    res.status(200).send("Produto deletado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.delete("/usuario/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = req.params.id

    const usuarios = await connection.raw(`
      SELECT * FROM funcionarios
      WHERE id = ${id};
    `)

    if (usuarios[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    await connection.raw(`
      DELETE FROM funcionarios
      WHERE id = ${id};
    `)

    res.status(200).send("Usuário deletado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})
