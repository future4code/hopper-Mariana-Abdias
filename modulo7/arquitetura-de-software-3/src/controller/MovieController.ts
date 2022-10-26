import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/movieDTO";

export class MovieController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, durationInMinutes, yearOfRelease } = req.body;

      const input: MovieInputDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease
     }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  public getAllMovie = async (req: Request, res: Response) => {
    try {
      const movieBusiness = new MovieBusiness()
      const result = await movieBusiness.getAllMovie()

      res.status(200).send({ Movies: result })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
