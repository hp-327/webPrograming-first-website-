const express = require('express')
const path = require('path')

const https = require('https')
const fs = require('fs')

const server = express()
const publicServedFilesPath = path.join(__dirname, 'public')

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'ejs')

server.use(express.urlencoded({extended: false}))

server.get('/homework/3', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})

server.post('/projects/5', (req, res) => {
  res.render("madlib", req.body)
})
/*
server.post('/projects/5', (req, res) => {
  res.send("Welcome " + req.body.name + "! " + "My favorite food is " +
  req.body.food + " too! We both love the movie " + req.body.movie
  + ". Im 100 years old, and you are " + req.body.age +
   " years old. Crazy world. You should buy a pet " + req.body.pet )
})
*/

server.use(express.static(publicServedFilesPath))
https.createServer({
  key: fs.readFileSync('/etc/letsencrypt/live/fezthegeck.tk/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/fezthegeck.tk/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/fezthegeck.tk/chain.pem'),
}, server).listen(443, () => console.log('HTTPS Service Ready!'))

const httpRedirect = express()
httpRedirect.get('*', function (req, res) {
  res.redirect('https://fezthegeck.tk' + req.url)
})
httpRedirect.listen(80, () => console.log('HTTP Redirect Ready!'))
