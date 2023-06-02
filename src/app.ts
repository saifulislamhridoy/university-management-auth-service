import express,{Application} from 'express'
import cors from 'cors'
const app:Application = express()

//using cors
app.use(cors())
//parse
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;