const {Router} = require('express')
const router = Router()
const jokes = require('one-liner-joke');

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная страница',
        joke: jokes.getRandomJoke().body,
        isHome: true
    })
})

module.exports = router