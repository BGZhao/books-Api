const express = require('express')
//const methodOverride = require('method-override')
const mongoose = require('mongoose')

require('dotenv').config()
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
})

//app.use(express.static('public'))
app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({extended: true}))
app.use(cors())
//app.use(methodOverride('_method'))

app.get('/', (req,res) => {
    res.send('HELLO WORLD')
})

const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

app.get('*', (req, res)=> {
    res.send(`error404`)
})

app.listen(PORT, ()=> {
    console.log('nomming at port', PORT)
})