const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const {MONGO_CONNECTION_STRING: mongoConnectionString} = process.env;
run();
async function run () {
  try {
   await mongoose.connect(mongoConnectionString)
  .then(() => console.log('Database connection successful'));
  } catch (err) {
    process.exit()
  }
}

const contactsRouter = require('./routes/api/contacts')
const { globalErrorHandler } = require('./middlewares')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use(globalErrorHandler);

module.exports = app
