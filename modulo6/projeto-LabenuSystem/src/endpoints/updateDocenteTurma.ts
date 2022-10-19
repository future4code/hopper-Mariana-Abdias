import { Request, Response } from 'express'
import { DocenteDatabase } from '../database/DocenteDatabase'

export const updateDocenteTurma = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const nome = req.params.nome as string
    const turma_id = req.body.turma_id as number

    if (!turma_id) {
      throw new Error('É necessário informar o módulo')
    }

    const docenteDatabase = new DocenteDatabase()
    await docenteDatabase.updateDocenteTurma(nome, turma_id)

    res.status(201).send({ message: 'Docente trocado de Turma com sucesso'})
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
