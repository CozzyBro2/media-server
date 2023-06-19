const fs = require('fs')
const path = require('path')

const app = require('express')()
const bodyParser = require('body-parser')

const app_port = ( process.env.PORT || 5530 )
const media_path = path.join(__dirname, '/media/')
const page_path = path.join(__dirname, '/pages/')

function getHomepage(_, res) {
    res.sendFile(page_path + 'home.html')
}

function getFile(req, res, go) {
    const name = media_path + req.params.file

    if (fs.existsSync(name)) {
        res.sendFile(name)
    }

    else go()
}

function getFailure(_, res) {
    res.sendFile(page_path + '404media.html')
}

app.get('/', getHomepage)
app.get('/:file', getFile)
app.use(getFailure)

app.use(bodyParser.raw({type: "image/*", limit: "40mb"}))
app.use(bodyParser.raw({type: "text/*", limit: "100mb"}))
app.use(bodyParser.raw({type: "video/*", limit: "1gb"}))

app.listen(app_port, () => {
    console.log(`[SERVER] Listening on port ${app_port}`)
})