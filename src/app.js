const express = require('express')
const path = require('path')

const app = express()

// console.log('__dirname', __dirname)
// console.log('__filename', __filename)

// serving static files from public directory
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
    res.send('express server wired')
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        data: {
            'temperature': 13,
            'feelslike': 15
        }
    })
})



app.listen(3000, () => {
    console.log('Server running on port 3000')
})