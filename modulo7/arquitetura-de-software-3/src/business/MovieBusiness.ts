import { MovieDatabase } from "../data/MovieDatabase"
import { v4 as generateId } from 'uuid'
import { CustomError } from '../error/CustomError'
import { InvalidRequest } from '../error/InvalidRequest'
import { MovieInputDTO } from '../model/movieDTO'

export class MovieBusiness {
  public create  = async(input : MovieInputDTO):Promise<void> => {
    try {
      const { title, description, durationInMinutes, yearOfRelease} = input

      if (!title || !description || !durationInMinutes || !yearOfRelease) {
        throw new InvalidRequest()
      }
  
      const id = generateId()
  
      const movieDatabase = new MovieDatabase()
      await movieDatabase.create({
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease,
      })
      
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }

   
  }

  public getAllMovie = async () => {
    try {
      const movieDatabase = new MovieDatabase()
      return await movieDatabase.getAllMovie()

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }
  }

}


