import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_users;
    `)

    res.status(200).send(result[0])
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}