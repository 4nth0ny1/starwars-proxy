const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const apicache = require('apicache')
const needle = require('needle')
const port = 3000

// app.get('/getAPIResponse', (req, res) => {
//     api_helper.API_call('https://swapi.dev/api/people/1')
//     .then(response => {
//         res.json(response)
//     })
//     .catch(error => {
//         res.send(error)
//     })
// })

let cache = apicache.middleware

app.get('/', cache('2 minutes'), async (req, res) => {
    api_helper.API_call('https://swapi.dev/api/')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))