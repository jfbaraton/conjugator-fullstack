const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log('Conjugation Time: ', Date.now())
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
    res.send('Conjugations home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About conjugations')
})
router.get('/health', (req, res) => {
    res.send('OK')
})

module.exports = router