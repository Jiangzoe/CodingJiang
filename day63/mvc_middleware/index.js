const express = require('express')

const path = require('path')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')
const validate = require('./middleware/validate.middleware')
const handle = require('./middleware/handle.middleware')

app
  .use(bodyParser.urlencoded({extended:false}))
  .use(bodyParser.json({limit:'50mb'}))
  .use(handle)
  .use(validate)
  .use(router)

function start(){
  app.listen(3025,() => {
    console.log('server is running')
  })
}

start()