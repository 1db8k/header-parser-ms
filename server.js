const express = require('express')
const app = express()
const util = require('util')
app.use('/', express.static(__dirname + '/public'))

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.acceptsLanguages()[0],
    operating_system: util.inspect(req, true, null)
  })
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Example app listening on port 5000!')
})
