/* eslint-disable no-sync */
import fs from 'fs'
import https from 'https'

import express from 'express'

const app = express()

https
  .createServer(
    {
      cert: fs.readFileSync('certs/localhost.pem'),
      key: fs.readFileSync('certs/localhost-key.pem'),
    },
    app
  )
  .listen(3000, () => {
    console.log('server is runing at https://localhost:3000/')
  })

app.use('/', express.static('build'))
