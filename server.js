const express  = require('express')
const app = express()
const Puppeteerfunc = require('./puppeteer')


Puppeteerfunc()



app.listen(8080)


/*
commands:
    npm i puppeteer express nodemon
 */