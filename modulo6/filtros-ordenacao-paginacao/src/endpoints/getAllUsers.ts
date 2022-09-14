import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let statusCode = 400
    let nome = req.query.nome as string
    // let order = req.query.order as string

    const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio
    WHERE name LIKE "%${nome}%";
    `)

    if (!nome) {
      nome = '%'
    }

  //   if (order && order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
  //     order = "ASC"
  //  }

    if (!result[0].length) {
      statusCode = 404
      throw new Error('No Users found')
    }

    if (result[0].length < 1) {
      statusCode = 404
      throw new Error('Nenhum Usuário encontrado')
    }

    res.status(200).send(result[0])
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
