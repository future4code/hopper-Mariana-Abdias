import { Request, Response } from 'express'
import connection from '../data/connection'
import { labecommerce_users } from '../types'

export const createUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      throw new Error('Passe o nome, email e password do usuário')
    }

    const newUser: labecommerce_users = {
      id: Date.now().toString(),
      name,
      email,
      password
    }

    await connection.raw(`
      INSERT INTO labecommerce_users(id, name, email, password)
      VALUES(${newUser.id}, "${newUser.name}", "${newUser.email}", "${newUser.password}")
    `)

    res.status(200).send('Usuário adicionado')
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
