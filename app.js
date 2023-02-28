const express = require('express')
const filesystem = require('fs')
const path = require('path')
const app = express()

const port = ( process.env['PORT'] || 5530 )

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, '/pages/home.html'))
})

app.get('/:file', (req, res) => {
    let name = path.join(__dirname, `/media/${req.params.file}`)

    if (!filesystem.existsSync(name)) {
        res.status(404)
        res.sendFile(path.join(__dirname, '/pages/404media.html'))

        return
    }

    res.sendFile(name)
})

app.listen(port, () => {
    console.log(`[SERVER] Listening on port ${port}`)
})