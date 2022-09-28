import express from 'express'
import { Router, Request, Response } from 'express'
import appWS from './ws'
import cors from 'cors'

const app = express()

const route = Router()

app.use(cors())

route.get('/api/', (req: Request, res: Response) => {
  res.send({ message: 'Hello everyone!!!' })
})

app.use(route)

app.listen(80, () => {
  console.log('Running on port 80.')
})

appWS(app)
