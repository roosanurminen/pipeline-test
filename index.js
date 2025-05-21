const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Testi 2 (varmuudeksi :D)</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})