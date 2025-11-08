import Express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './user/user.js'
 dotenv.config()
 const app = Express()
 app.use(Express.json())
 app.use(cors())

const PORT = process.env.PORT || 3000


app.use('/user' , userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})