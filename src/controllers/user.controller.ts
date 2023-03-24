import { Request, Response } from 'express'
import * as allUser from '../repositores/user.repository'

async function getUserController(req:Request, res:Response) {
try {
  const result = await allUser.getUserRepository()
    return res.send(result)
} catch (error) {
  return res.sendStatus(500).send(error)
}
}

export {
  getUserController
}
