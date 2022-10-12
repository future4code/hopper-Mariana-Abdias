import { Request, Response } from 'express'
import connection from '../data/connection'

export const createPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}