export type TDocenteEspecialidades = {
  id: number,
  docente_id: number,
  especialidades_id: number,
}

export class DocenteEspecialidades {
  constructor(
      private id: number,
      private docente_id: number,
      private especialidades_id: number,
  ) {
      this.id = id
      this.docente_id = docente_id
      this.especialidades_id = especialidades_id
  }

  public getId() {
    return this.id
  }

  public getDocenteId() {
      return this.docente_id
  }

  public getEspecialidadesId() {
      return this.especialidades_id
  }

  public setId(newId: number) {
    this.id = newId
  }

  public setDocenteId(newDocenteId: number) {
      this.docente_id = newDocenteId
  }

  public setEspecialidadesId(newEspecialidadesId: number) {
      this.especialidades_id = newEspecialidadesId
  }
}