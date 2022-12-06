import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllUsersByType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let statusCode = 400
    const type: string = req.params.type;

    if (type.toUpperCase() !== "OPERATIONS" &&
    type.toUpperCase() !== "TEACHER" &&
    type.toUpperCase() !== "CX"
    ) {
      statusCode = 422;
      throw new Error(`"type" value isn´t a valid one! It should be "operations", "teacher"
      or "cx" to be a valid one! Please, try again :)`)
      }

    const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio
    WHERE type = "${type}";
    `)

    if (!result[0].length) {
      statusCode = 404
      throw new Error('No Types found')
    }

    if (result[0].length < 1) {
      statusCode = 404
      throw new Error('Este tipo não foi encontrado')
    }

    res.status(200).send(result[0])
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
