import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_DOCENTE } from "../database/tableNames"

export const getDocenteByNome = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const nome = req.params.nome

        const [result] = await connection.raw(`
        SELECT * FROM ${TABLE_DOCENTE}
        WHERE nome = "${nome}";
        `)
        
        res.status(200).send({ estudantes: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}