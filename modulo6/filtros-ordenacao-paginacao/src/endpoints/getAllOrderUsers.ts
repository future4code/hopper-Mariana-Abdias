import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllOrderUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let statusCode = 400
    let sort = req.query.sort as string
    let order = req.query.order as string

    if (!sort || !order) {
      statusCode = 422;
      throw new Error(`Please enter a valid "sort and "order" values`)
   }

    sort = sort.toLocaleLowerCase() === "name" ? "name" : sort.toLocaleLowerCase() === "type" ? "type" : "email";   
    order = order.toLocaleUpperCase() === "DESC" ? "DESC" : "ASC"; 

    const result = await connection('aula48_exercicio')
      .orderBy(sort, order);


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
