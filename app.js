const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json([{name: 'john'}, {name: 'susan'}])
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})