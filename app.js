const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
// const jwt = require('jsonwebtoken');
// const {JWT_SECRET} = process.env;

// const payload = {
//   userId:'63ece2c8eb7a377105f67151'

// }

// const token = jwt.sign(payload,JWT_SECRET, {expiresIn: '1s'})


// const decoded = jwt.decode(token)


// const result = jwt.verify(token, JWT_SECRET)


const userRouter = require('./routes/api/users.router')

const contactsRouter = require('./routes/api/contacts')
const { globalErrorHandler } = require('./middlewares')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)
app.use('/api/users', userRouter )


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use(globalErrorHandler);

module.exports = app
