import { UserArqDatabase } from '../data/UserArqDatabase'

export class UserArqBusiness {
  public createUserArq = async (input: any) => {
    try {
      const { name, email, password } = input

      if (!name || !email || !password) {
        throw new Error('Preencha os campos "name", "email" e "password"')
      }

      const id: string = Date.now().toString()

      const userArqDatabase = new UserArqDatabase()

      await userArqDatabase.insertUserArq({
        id,
        name,
        email,
        password
      })
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public getAllUserArq = async () => {
    try {
      const userArqDatabase = new UserArqDatabase()
      return await userArqDatabase.getAllUserArq()
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public deleteUserArq = async (id: string) => {
    try {
      const userArqId = id
      const userArqDatabase = new UserArqDatabase()
      return await userArqDatabase.deleteUserArq(userArqId)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
