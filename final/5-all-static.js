const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) // path.join also works
    adding to static assets
    SSR 
}) */

app.all('*', (req, res) => {
    res.status(404).send("404 page not found")
})

app.listen(4000, () => {
    console.log('server is listening on port 4000')
})
