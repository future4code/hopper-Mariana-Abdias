export type THobbies = {
  id: number,
  nome: string,
}

export class Hobbies {
  constructor(
      private id: number,
      private nome: string,
  ) {
      this.id = id
      this.nome = nome
  }

  public getId() {
      return this.id
  }

  public getNome() {
      return this.nome
  }

  public setId(newId: number) {
      this.id = newId
  }

  public setNome(newNome: string) {
      this.nome = newNome
  }

}