import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllUsersByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let statusCode = 400
    let name = req.query.name as string

    if (!name) {
      name = '%'
    }

    const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio
    WHERE name LIKE "%${name}%";
    `)

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
