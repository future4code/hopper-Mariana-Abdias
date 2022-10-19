import { Estudante } from '../models/Estudante'
import BaseDatabase from './BaseDatabase'

export class EstudanteDatabase extends BaseDatabase {
  public static TABLE_ESTUDANTE = 'Estudantes'

  public async getAllEstudantes() {
    const result = await BaseDatabase.connection(
      EstudanteDatabase.TABLE_ESTUDANTE
    ).select()
    return result
  }

  public async createEstudante(estudante: Estudante) {
    await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE).insert({
      id: estudante.getId(),
      nome: estudante.getNome(),
      email: estudante.getEmail(),
      data_nasc: estudante.getDataNasc(),
      turma_id: estudante.getTurmaId()
    })
  }

  public async getEstudanteByNome(nome: string) {
    const result = await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE)
      .select()
      .where({ nome })
    return result
  }

  public async updateEstudanteTurma(nome: string, turma_id: number) {
    await BaseDatabase.connection(EstudanteDatabase.TABLE_ESTUDANTE)
    .update({turma_id})
    .where({nome})
  }
}
