import { Request, Response } from 'express'
import connection from '../data/connection'

export const getAllUsersFilterAndOrderAndPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.query.name as string || "%";
    const type: string = req.query.type as string || "%";
    const sort: string = req.query.sort as string || "name";
    const order: string = req.query.order as string || "DESC";
    const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1;
    const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 10;

    const offset: number = size * (page - 1);

    const result = await connection('aula48_exercicio')
        .where("name", "LIKE", `%${name}%`)
        .andWhere("type", "LIKE", `%${type}%`)
        .orderBy(sort, order)
        .limit(size)
        .offset(offset);

    res.status(200).send(result);

} catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
};
}
