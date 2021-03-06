const mongoose = require('mongoose')

const url = "mongodb://127.0.0.1:27017/node-test"

mongoose.connect(url, {useNewUrlParser: true})

const db = mongoose.connection
db.once('open', _ => {
    console.log(`Database connected: ${url}`)
})

db.on('error', err => {
    console.log(`connection error: `, err)
})

module.exports = db