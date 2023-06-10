import express from 'express'
import useRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorMiddleware } from './middleware/error.js'
export const app = express()
config({
    path:"./data/config.env"
})
//using midelwere
app.use(express.urlencoded({extended:true}))
//to access body content
app.use(express.json())
//to access cookie
app.use(cookieParser())
//to use router
app.use("/api/v1/user",useRouter)
app.use("/api/v1/task",taskRouter)
//midelware for errors
app.use(errorMiddleware)

app.get('/',(req,res)=>{
    res.send("Hello")
})

