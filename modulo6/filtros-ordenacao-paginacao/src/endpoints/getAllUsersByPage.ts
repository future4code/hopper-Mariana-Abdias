import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllUsersByPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1;
    const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 5;
    
    const offset: number = size * (page - 1);

    const result = await connection('aula48_exercicio')
        .limit(size)
        .offset(offset);

    res.status(200).send(result);
    
 } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
 }
}
