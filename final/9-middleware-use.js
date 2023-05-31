const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
// req => middleware => res
app.use([logger, authorize]) // order matters, everything goes in order
// app.use('/api', logger) only affects url that start with /api

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})