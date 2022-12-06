import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  public create  = async({ email, name, password }: any):Promise<void> => {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  public getAllUser = async () => {
    try {
      const userDatabase = new UserDatabase()
      return await userDatabase.getAllUser()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

}


