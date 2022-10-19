import { Docente } from '../models/Docente'
import BaseDatabase from './BaseDatabase'

export class DocenteDatabase extends BaseDatabase {
  public static TABLE_DOCENTE = 'Docentes'

  public async getAllDocentes() {
    const result = await BaseDatabase.connection(
      DocenteDatabase.TABLE_DOCENTE
    ).select()
    return result
  }

  public async createDocente(docente: Docente) {
    await BaseDatabase.connection(DocenteDatabase.TABLE_DOCENTE).insert({
      id: docente.getId(),
      nome: docente.getNome(),
      email: docente.getEmail(),
      data_nasc: docente.getDataNasc(),
      turma_id: docente.getTurmaId()
    })
  }

  public async getDocenteByNome(nome: string) {
    const result = await BaseDatabase.connection(DocenteDatabase.TABLE_DOCENTE)
      .select()
      .where({ nome })
    return result
  }

  public async updateDocenteTurma(nome: string, turma_id: number) {
    await BaseDatabase.connection(DocenteDatabase.TABLE_DOCENTE)
    .update({turma_id})
    .where({nome})
  }

}
