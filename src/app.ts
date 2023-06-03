import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

//using cors
app.use(cors())
//parse
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', usersRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
