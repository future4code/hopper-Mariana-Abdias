import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_DOCENTE } from "../database/tableNames"

export const getDocentes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const result = await connection(TABLE_DOCENTE).select()
        res.status(200).send({ docentes: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}