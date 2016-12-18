const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))

// app.get('/api/whoami', (req, res) => {
//   res.json({
//     ipaddress: req.ip,
//     language: null,
//     operating_system: null
//   })
// })

app.listen(process.env.PORT || 5000, () => {
  console.log('Example app listening on port 5000!')
})
