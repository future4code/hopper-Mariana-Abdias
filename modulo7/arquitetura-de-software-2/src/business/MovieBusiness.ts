import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
  public create  = async({ title, description, duration_in_minutes, year_of_release }: any):Promise<void> => {
    if (!title || !description || !duration_in_minutes || !year_of_release) {
      throw new Error("Dados inválidos (title, description, duration_in_minutes, year_of_release)")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      duration_in_minutes,
      year_of_release,
    })
  }

  public getAllMovie = async () => {
    try {
      const movieDatabase = new MovieDatabase()
      return await movieDatabase.getAllMovie()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

}


