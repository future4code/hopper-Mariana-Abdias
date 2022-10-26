import { UserDatabase } from '../data/UserDatabase'
import { v4 as generateId } from 'uuid'
import { CustomError } from '../error/CustomError'
import { InvalidRequest } from '../error/InvalidRequest'
import { UserInputDTO } from '../model/userDTO'

export class UserBusiness {
  public create = async (input : UserInputDTO): Promise<void> => {
    try {
      const { email, name, password} = input

      if (!email || !name || !password) {
        throw new InvalidRequest()
      }

      const id = generateId()

      const userDatabase = new UserDatabase()

      await userDatabase.create({
        id,
        name,
        email,
        password
      })

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }
  }

  public getAllUser = async () => {
    try {
      const userDatabase = new UserDatabase()
      return await userDatabase.getAllUser()
      
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage)
    }
  }
}
