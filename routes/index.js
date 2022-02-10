const express = require('express')
const url = require('url')
const router = express.Router();
const apicache = require('apicache')
const needle = require('needle');

let cache = apicache.middleware

router.get('/', cache('2 minutes'), async (req, res) => {
    try {
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query
        })

        const apiRes = await needle('get', `https://swapi.dev/api/people/${params}`)
        const data = apiRes.body
        res.status(200).json(data)
    } catch (error) {
        res.send(error)
    }
})

// app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = router