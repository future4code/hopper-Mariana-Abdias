import { Request, Response } from 'express'
import connection from '../data/connection'
import { labecommerce_purchases } from '../types'

export const createPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { user_id, product_id, quantity, total_price } = req.body

    if (!user_id || !product_id || !quantity || !total_price) {
      throw new Error('Passe o id do Usuário, id da Compra, quantidade e preço total da campra')
    }

    const newPurchase: labecommerce_purchases = {
      id: Date.now().toString(),
      user_id,
      product_id,
      quantity,
      total_price
    }

    await connection.raw(`
      INSERT INTO labecommerce_purchases(id, user_id, product_id, quantity, total_price)
      VALUES(${newPurchase.id}, "${newPurchase.user_id}", "${newPurchase.product_id}", "${newPurchase.quantity}", "${newPurchase.total_price}")
    `)

    res.status(200).send('Compra realizada')
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}