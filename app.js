const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const userRouter = require('./routes/api/users.router')
const contactsRouter = require('./routes/api/contacts')
const { globalErrorHandler } = require('./middlewares')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public"));

app.use('/api/users', userRouter )
app.use('/api/contacts', contactsRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use(globalErrorHandler);

module.exports = app
