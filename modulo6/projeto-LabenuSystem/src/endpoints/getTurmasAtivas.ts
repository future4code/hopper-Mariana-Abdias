import { Request, Response } from "express"
import { TurmaDatabase } from "../database/TurmaDataBase"


export const getTurmasAtivas = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const turmaDatabase = new TurmaDatabase()
        const result = await turmaDatabase.getAllTurmasActive()
        res.status(200).send({ users: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}