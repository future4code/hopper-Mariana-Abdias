import { userArq } from '../types/userArq'
import { BaseDatabase } from './BaseDatabase'

export class UserArqDatabase extends BaseDatabase {
  public static TABLE_NAME = 'User_Arq'

  public insertUserArq = async (userArq: userArq) => {
    try {
      await UserArqDatabase.connection
        .insert({
          id: userArq.id,
          name: userArq.name,
          email: userArq.email,
          password: userArq.password
        })
        .into(UserArqDatabase.TABLE_NAME)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async getAllUserArq() {
    const result = await UserArqDatabase.connection(
      UserArqDatabase.TABLE_NAME
    ).select('*')
    return result
  }

  public async deleteUserArq(id: string) {
    const result = await UserArqDatabase.connection(UserArqDatabase.TABLE_NAME)
      .select('*')
      .from(UserArqDatabase.TABLE_NAME)
      .where("id", "=", id)
      .delete()
    return result
  }
}
