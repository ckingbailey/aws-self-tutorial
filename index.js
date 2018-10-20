const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send("Hello, Beatle"))

app.listen(port, () => {
    console.log("I'm listening, dear")
})