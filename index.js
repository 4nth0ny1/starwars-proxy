const express = require('express')
const app = express()
const apicache = require('apicache')
const needle = require('needle')
const port = 3000

let cache = apicache.middleware

app.get('/', cache('2 minutes'), async (req, res) => {
    try {
        const apiRes = await needle('get', 'https://swapi.dev/api/people/3')
        const data = apiRes.body
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))