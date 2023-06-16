const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')
const schedule = require('./routes/schedule')

// static asets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.use('/api/people', people)

app.use('/login', auth)

app.use('/schedule', schedule)


app.listen(4000, () => {
    console.log('Listening on port 4000')
})