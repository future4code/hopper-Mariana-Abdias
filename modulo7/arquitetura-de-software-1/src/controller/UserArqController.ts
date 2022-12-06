import { Request, Response } from 'express'
import { UserArqBusiness } from '../business/UserArqBusiness'

export class UserArqController {
  public createUserArq = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body

      const input = {
        name,
        email,
        password
      }

      const userArqBusiness = new UserArqBusiness()
      await userArqBusiness.createUserArq(input)

      res.status(201).send({ message: 'Usuário criado!' })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  public getAllUserArq = async (req: Request, res: Response) => {
    try {
      const userArqDatabase = new UserArqBusiness()
      const result = await userArqDatabase.getAllUserArq()

      res.status(200).send({ usersArq: result })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  public deleteUserArq = async (req: Request, res: Response) => {
    try {
      const id = req.params.id

      const input = {
        id
      }

      const userArqBusiness = new UserArqBusiness()
      await userArqBusiness.deleteUserArq(id)

      res.status(201).send({ message: 'Usuário deletado!' })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
