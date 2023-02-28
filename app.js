const express = require('express')
const filesystem = require('fs')
const path = require('path')
const app = express()

const port = ( process.env.PORT || 5530 )

const mediaPath = path.join(__dirname, '/media/')
const pagePath = path.join(__dirname, '/pages/')

if (!mediaPath) {
    throw new Error('Missing media folder.')
}

app.get('/', (_, res) => {
    res.sendFile(pagePath + 'home.html')
})

app.get('/:file', (req, res) => {
    const name = mediaPath + req.params.file

    if (!filesystem.existsSync(name)) {
        res.status(404)
        res.sendFile(pagePath + '404media.html')

        return
    }

    res.sendFile(name)
    console.log(`[SUCCESS] Sent ${req.params.file} to ${req.ip}`)
});

app.listen(port, () => {
    console.log(`[SERVER] Listening on port ${port}`)
})