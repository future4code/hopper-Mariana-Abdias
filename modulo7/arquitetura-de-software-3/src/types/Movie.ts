export class Movie {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private duration_in_minutes: number,
    private year_of_release: number
  ) { }
  
  getId() {
    return this.id
  }

  getTitle() {
    return this.title
  }

  getDescription() {
    return this.description
  }

  getDuracionInMinutes() {
    return this.duration_in_minutes
  }

  getYearOfRelease() {
    return this.year_of_release
  }

  setId(newId: string) {
    this.id = newId
  }

  setTitle(newTitle: string) {
    this.title = newTitle
  }

  setDescription(newDescription: string) {
    this.description = newDescription
  }

  setDurationInMinutes(newDurationInMinutes: number) {
    this.duration_in_minutes = newDurationInMinutes
  }

  setYearOfRelease(newYearOfRelease: number) {
    this.year_of_release = newYearOfRelease
  }
}
