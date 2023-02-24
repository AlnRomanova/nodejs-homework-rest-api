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

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'alinakhraban@gmail.com', 
  from: 'alinakhraban@gmail.com', 
  subject: 'Verify your email',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = app
