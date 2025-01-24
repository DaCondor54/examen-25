import { Request, Response } from 'express'

export class HomeController {
  static welcome(req: Request, res: Response): Response {


    return res.json({ message: 'Welcome to bezkoder application.' })
  }
}

