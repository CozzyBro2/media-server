const express = require('express')
const filesystem = require('fs')
const path = require('path')
const app = express()

const port = ( process.env.PORT || 5530 )

const mediaPath = path.join(__dirname, '/media/')
const pagePath = path.join(__dirname, '/pages/')

app.get('/', (_, res) => {
    res.sendFile(pagePath + 'home.html')
})

app.get('/:file', (req, res, go) => {
    const name = mediaPath + req.params.file

    if (filesystem.existsSync(name)) {
        res.sendFile(name)
    }

    else go
});

app.use((_, res) => {
    res.send(pagePath + 'home.html')
})

app.listen(port, () => {
    console.log(`[SERVER] Listening on port ${port}`)
})