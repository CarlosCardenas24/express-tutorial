const express = require('express')
const app = express()
const {products} = require('./data')
const {schedule} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1> <a href="/api/products">products</a> <a href="/schedule">schedule</a>')
})

app.get('/schedule', (req, res) => {
    const newSchedule = schedule.map((scheduled) => {
        let {day, morning, afternoon, evening} = scheduled
        return {day, morning, afternoon, evening}
    })
    res.json(newSchedule)
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        let {id, name, image} = product
        return {id, name, image}
    })

    res.json(newProducts)
})

app.get('/schedule/:scheduledDay', (req, res) => {
    console.log(req)
    console.log(req.params)
    const {scheduledDay} = req.params
    const singleDay = schedule.find((scheduled) => scheduled.day === scheduledDay)

    if(!singleDay){
        return res.status(404).send('Schedule On That Day Does Not Exist (Capatolize the Day)')
    }

    res.json(singleDay)
}) 

app.get('/api/proudcts/:productID', (req, res) => {
    /* console.log(req)
    console.log(req.params) */
    const {productID} = req.params

    const singleProduct = products.find((product) => 
        product.id === Number(productID)
    )

    if(!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }

    return res.json(singleProduct)
})


app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hellow world')
})

app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts < 1) {
        // res.status(200).send('not products matched your search')
        return res.status(200).json({ success: true, data: [] })
    }
    
    res.status(200).json(sortedProducts)
    
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})