import { Request, Response } from 'express'
import { TurmaDatabase } from '../database/TurmaDatabase'

export const updateModuloTurma = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const nome = req.params.nome as string
    const modulo = req.body.modulo as number

    if (!modulo) {
      throw new Error('É necessário informar o módulo')
    }

    const turmaDatabase = new TurmaDatabase()
    await turmaDatabase.updateModuloTurma(nome, modulo)

    res.status(201).send({ message: 'Módulo da Turma alterado com sucesso'})
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
