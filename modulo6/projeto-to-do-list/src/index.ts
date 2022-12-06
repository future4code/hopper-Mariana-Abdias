import express, { Request, Response } from 'express'
import cors from 'cors'
import connection from './database/connection'
import { Users, ToDoList } from './types'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    if (id) {
      const result = await connection.raw(`
        SELECT * FROM Users
        WHERE id = "${id}";
      `)

      return res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM Users;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post('/users', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { name, nickname, email } = req.body

    if (!name || !nickname || !email) {
      throw new Error('Passe o nome, nickname e email do usuário')
    }

    const usuarios = await connection.raw(`
    SELECT * FROM Users
  `)

    const newUser: Users = {
      id: Number(usuarios[0].length + 1),
      name,
      nickname,
      email
    }

    await connection.raw(`
      INSERT INTO Users(id, name, nickname, email)
      VALUES(${newUser.id}, "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
    `)

    res.status(200).send('Usuário adicionado')
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put('/users/edit/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const { name, nickname, email } = req.body

    const usuarios = await connection.raw(`
      SELECT * FROM Users
      WHERE id = ${id};
    `)

    if (usuarios[0].length === 0) {
      throw new Error('Usuário não encontrado')
    }

    if (!name) {
      throw new Error('É necessário informar o novo nome')
    }

    if (!nickname) {
      throw new Error('É necessário informar o novo apelido')
    }

    if (!email) {
      throw new Error('É necessário informar o novo email')
    }

    await connection.raw(`
    UPDATE Users
    SET name = "${name}", nickname = "${nickname}", email = "${email}" 
    WHERE id = ${id};
  `)

    res.status(200).send('Cadastro alterado')
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/task/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    if (id) {
      const result = await connection.raw(`
        SELECT * FROM ToDoList
        WHERE id = ${id};
      `)

      return res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM ToDoList;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post('/task', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { title, description, limitDate, status, creatorUserId } = req.body

    if (!title || !description || !limitDate || !status || !creatorUserId) {
      throw new Error(
        'Passe o título, a descrição, a data limite, o status e o id do usuário'
      )
    }

    const toDoList = await connection.raw(`
    SELECT * FROM ToDoList
  `)

    const newTask: ToDoList = {
      id: Number(toDoList[0].length + 1),
      title,
      description,
      limitDate,
      status,
      creatorUserId
    }

    await connection.raw(`
      INSERT INTO ToDoList(id, title, description, limitDate, status, creatorUserId)
      VALUES(${newTask.id}, "${newTask.title}", "${newTask.description}", "${newTask.limitDate}", "${newTask.status}", ${newTask.creatorUserId})
    `)

    res.status(200).send('Tarefa adicionada')
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/users', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const result = await connection.raw(`
      SELECT * FROM Users;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/task', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const creatorUserId = req.query.creatorUserId

    if (creatorUserId) {
      const result = await connection.raw(`
        SELECT t.id as taskId, t.title, t.description, t.limitDate, t.creatorUserId, t.status, u.nickname as creatorUserNickname
        FROM ToDoList as t
        INNER JOIN Users as u ON t.creatorUserId = u.id
        WHERE creatorUserId = ${creatorUserId};
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM ToDoList;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/user', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const query = req.query.query

    if (query) {
      const result = await connection.raw(`
        SELECT * FROM Users
        WHERE nickname = "${query}";
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM Users;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/task/:id/responsible', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    if (id) {
      const result = await connection.raw(`
        SELECT t.id as taskId,  u.nickname as Nickname
        FROM ToDoList as t
        INNER JOIN Users as u ON t.creatorUserId = u.id
        WHERE t.id = ${id}
      `)

      return res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM ToDoList;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/task/:id/users', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    if (id) {
      const result = await connection.raw(`
        SELECT t.id as taskId, t.title, t.description, t.limitDate, t.creatorUserId, u.nickname as creatorUserNickname
        FROM ToDoList as t
        INNER JOIN Users as u ON t.creatorUserId = u.id
        WHERE t.id = ${id}
      `)

      return res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM ToDoList;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put('/task/status/:id', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)
    const { status } = req.body

    const tasks = await connection.raw(`
      SELECT status FROM ToDoList
      WHERE id = ${id};
    `)

    if (tasks[0].length === 0) {
      throw new Error('Tarefa não encontrada')
    }

    if (!status) {
      throw new Error('É necessário informar o novo status da tarefa')
    }

    await connection.raw(`
    UPDATE ToDoList
    SET status = "${status}" 
    WHERE id = ${id};
  `)

    res.status(200).send('Cadastro alterado')
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get('/tasks', async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const status = req.query.status

    if (status) {
      const result = await connection.raw(`
        SELECT t.id as taskId, t.title, t.description, t.limitDate, t.creatorUserId, u.nickname as creatorUserNickname
        FROM ToDoList as t
        INNER JOIN Users as u ON t.creatorUserId = u.id
        WHERE t.status = "${status}";
      `)

      res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM ToDoList;
    `)

    res.status(200).send(result[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.delete("/task/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const task = await connection.raw(`
      SELECT * FROM ToDoList
      WHERE id = ${id};
    `)

    if (task[0].length === 0) {
      throw new Error("Tarefa não encontrado")
    }

    await connection.raw(`
      DELETE FROM ToDoList
      WHERE id = ${id};
    `)

    res.status(200).send("Tarefa deletado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.delete("/user/:id", async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const id = Number(req.params.id)

    const user = await connection.raw(`
      SELECT * FROM Users
      WHERE id = ${id};
    `)

    if (user[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    await connection.raw(`
      DELETE FROM Users
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
