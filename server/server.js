const path = require('path')
const port = process.env.PORT || 3000
const express = require('express')
const pubilcPath = path.join(__dirname, '..', 'public')
const app = express()

app.use(express.static(pubilcPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(pubilcPath, 'index.html'))
})

app.listen(port, () => {
    console.log('server started at port', port)
})