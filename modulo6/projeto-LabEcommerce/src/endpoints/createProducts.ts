import { Request, Response } from 'express'
import connection from '../data/connection'
import { labecommerce_products} from '../types'

export const createProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, price, image_url } = req.body

    if (!name || !price || !image_url) {
      throw new Error('Passe o nome, preço e imagem do produto')
    }

    const newProduct: labecommerce_products = {
      id: Date.now().toString(),
      name,
      price,
      image_url
    }

    await connection.raw(`
      INSERT INTO labecommerce_products(id, name, price, image_url)
      VALUES(${newProduct.id}, "${newProduct.name}", "${newProduct.price}", "${newProduct.image_url}")
    `)

    res.status(200).send('Produto adicionado')
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}