import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM labecommerce_products;
    `)

    res.status(200).send(result[0])
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}