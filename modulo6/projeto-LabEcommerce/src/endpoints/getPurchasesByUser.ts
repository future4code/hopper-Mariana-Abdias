import { Request, Response } from 'express'
import connection from '../data/connection'

export const getPurchasesByUser = async (
  req: Request,
  res: Response
) => {
  try {
    const user_id = req.params.user_id

    if (user_id) {
      const result = await connection.raw(`
        SELECT u.id as userId,  p.product_id as productId, p.quantity, p.total_price
        FROM labecommerce_users as u
        INNER JOIN labecommerce_purchases as p ON u.id = user_id
        WHERE u.id = ${user_id}
      `)

      return res.status(200).send(result[0])
    }

    const result = await connection.raw(`
      SELECT * FROM labecommerce_purchases;
    `)

    res.status(200).send(result[0])
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}