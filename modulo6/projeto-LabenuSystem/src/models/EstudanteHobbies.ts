export type TEstudanteHobbies = {
  id: number,
  estudante_id: number,
  hobbie_id: number,
}

export class EstudanteHobbies {
  constructor(
      private id: number,
      private estudante_id: number,
      private hobbie_id: number,
  ) {
      this.id = id
      this.estudante_id = estudante_id
      this.hobbie_id = hobbie_id
  }

  public getId() {
    return this.id
  }
  
  public getEstudanteId() {
      return this.estudante_id
  }

  public getHobbieId() {
      return this.hobbie_id
  }

  public setId(newId: number) {
    this.id = newId
  }

  public setEstudanteId(newEstudanteId: number) {
      this.estudante_id = newEstudanteId
  }

  public setHobbieId(newHobbieId: number) {
      this.hobbie_id = newHobbieId
  }
}