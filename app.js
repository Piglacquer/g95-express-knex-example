const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(data => res.json({data}))
})

app.post('/', (req, res) => {
    console.log(req.body)
    queries.createStudent(req.body)
    .then(data => res.json({data}))
})
// ES5
// app.get('/:id', function(req, res){

// })