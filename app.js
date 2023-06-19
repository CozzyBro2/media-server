const app = require('express')()
const bodyParser = require('body-parser')

const fs = require('fs')
const path = require('path')

const port = ( process.env.PORT || 5530 )

const media_path = path.join(__dirname, '/media/')
const page_path = path.join(__dirname, '/pages/')

app.use(bodyParser.raw({type: "image/*", limit: "40mb"}))
app.use(bodyParser.raw({type: "text/*", limit: "1gb"}))
app.use(bodyParser.raw({type: "video/*", limit: "1gb"}))

app.get('/', (_, res) => {
    res.sendFile(page_path + 'home.html')
})

app.get('/:file', (req, res, go) => {
    const name = media_path + req.params.file

    if (fs.existsSync(name)) {
        res.sendFile(name)
    }

    else go()
});

app.use((_, res) => {
    res.send(pagePath + '404media.html')
})

app.listen(port, () => {
    console.log(`[SERVER] Listening on port ${port}`)
})