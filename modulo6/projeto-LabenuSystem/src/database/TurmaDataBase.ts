import { Turma } from '../models/Turma'
import BaseDatabase from './BaseDatabase'
import { TABLE_TURMA } from './tableNames'

export class TurmaDatabase extends BaseDatabase {
  public static TABLE_TURMA = 'Turmas'

  public async getAllTurmasActive() {
    const result = await BaseDatabase.connection(
      TurmaDatabase.TABLE_TURMA
    ).select()
    .where("modulo", ">", 0)
    return result
  }

  public async createTurma(turma: Turma) {
    await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA).insert({
      id: turma.getId(),
      nome: turma.getNome(),
      modulo: turma.getModulo()
    })
  }

  public async updateModuloTurma(nome: string, modulo: number) {
    await BaseDatabase.connection(TurmaDatabase.TABLE_TURMA)
    .update({modulo})
    .where({nome})
  }

}
