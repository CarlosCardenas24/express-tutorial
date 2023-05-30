const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user on home page')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    console.log('user on about page')
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    console.log('user on unkown page')
    res.status(404).send('<h1>404 Page Not Found</h1>')
})

app.listen(4000, () => {
    console.log('server is listening on port 4000')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen