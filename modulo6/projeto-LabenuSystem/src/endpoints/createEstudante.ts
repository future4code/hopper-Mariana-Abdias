import { Request, Response } from 'express'
import connection from '../database/connection'
import { TABLE_ESTUDANTE } from '../database/tableNames'
import { Estudante } from '../models/Estudante'

export const createEstudante = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const nome = req.body.nome
    const email = req.body.email
    const data_nasc = req.body.data_nasc
    const turma_id = req.body.turma_id

    if (!nome || !email || !data_nasc || !turma_id) {
      throw new Error('Body inválido.')
    }

    const estudante = new Estudante(Number(Math.random()), nome, email,data_nasc, turma_id)

    await connection(TABLE_ESTUDANTE).insert({
      id: estudante.getId(),
      nome: estudante.getNome(),
      email: estudante.getEmail(),
      data_nasc: estudante.getDataNasc(),
      turma_id: estudante.getTurmaId()
    })

    res.status(201).send({ message: 'Estudante criado', estudante: estudante })
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
