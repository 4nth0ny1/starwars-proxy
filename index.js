const url = require('url')
const express = require('express')
const app = express()
const needle = require('needle')
const apicache = require('apicache')
const { append } = require('express/lib/response')
const port = 3000;

// router.get('/', async (req, res) => {
//     const apiRes = await needle('get', 'https://swapi.dev/api/')
//     const data = apiRes.body

//     res.status(200).json(data)
// })

// module.exports = router

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log('listening on 3000');
})