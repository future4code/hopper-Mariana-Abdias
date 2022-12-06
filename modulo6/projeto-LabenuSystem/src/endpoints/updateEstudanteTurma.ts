import { Request, Response } from 'express'
import { EstudanteDatabase } from '../database/EstudanteDatabase'

export const updateEstudanteTurma = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const nome = req.params.nome as string
    const turma_id = req.body.turma_id as number

    if (!turma_id) {
      throw new Error('É necessário informar o módulo')
    }

    const estudanteDatabase = new EstudanteDatabase()
    await estudanteDatabase.updateEstudanteTurma(nome, turma_id)

    res.status(201).send({ message: 'Aluno trocado de Turma com sucesso'})
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
