const express = require('express')
// const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const questionRouter = require('./routes/questionRouter')
const interviewRouter = require('./routes/interviewRouter')

const PORT = 3000
// app.use(bodyParser.json())
app.use(express.json())
// app.use(cors())
app.use(cors({
   origin: '*',
   credentials: true 
}))
app.use(cookieParser())
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/questions', questionRouter)
app.use('/interviews', interviewRouter)

app.listen(PORT, () => {
    console.info(`server listening on port ${PORT}`)
})