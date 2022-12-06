import { Request, Response } from 'express'
import { TurmaDatabase } from '../database/TurmaDatabase'
import { Turma } from '../models/Turma'

export const createTurma = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const nome = req.body.nome
    const modulo = req.body.modulo

    if (!nome || !modulo) {
      throw new Error('Body inválido.')
    }

    const turma = new Turma(Number(Math.random()), nome, modulo)

    const turmaDatabase = new TurmaDatabase()
    await turmaDatabase.createTurma(turma)

    res.status(201).send({ message: 'Turma criada com sucesso', turma: turma })
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
