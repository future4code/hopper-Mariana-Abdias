import { Request, Response } from 'express'
import connection from '../database/connection'
import { TABLE_DOCENTE } from '../database/tableNames'
import { Docente } from '../models/Docente'

export const createDocente = async (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const nome = req.body.nome
    const email = req.body.email
    const data_nasc = req.body.data_nasc
    const turma_id = req.body.turma_id

    if (!nome || !email || !data_nasc || !turma_id) {
      throw new Error('Body inválido.')
    }

    const docente = new Docente(Number(Math.random()), nome, email,data_nasc, turma_id)

    await connection(TABLE_DOCENTE).insert({
      id: docente.getId(),
      nome: docente.getNome(),
      email: docente.getEmail(),
      data_nasc: docente.getDataNasc(),
      turma_id: docente.getTurmaId()
    })

    res.status(201).send({ message: 'Docente criado', docente: docente })
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
}
