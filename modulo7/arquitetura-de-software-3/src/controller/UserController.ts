import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { name, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        email,
        password
     }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getAllUser = async (req: Request, res: Response) => {
    try {
      const userBusiness = new UserBusiness()
      const result = await userBusiness.getAllUser()

      res.status(200).send({ users: result })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}