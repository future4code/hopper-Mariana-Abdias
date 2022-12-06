import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_ESTUDANTE } from "../database/tableNames"

export const getEstudantes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection(TABLE_ESTUDANTE).select()
        res.status(200).send({ estudantes: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}