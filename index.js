const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')


const port = process.env.PORT || 8080
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/mangas", (req, res) => {
    res.status(200).send("naruto")
})

app.use("/", (req, res) => {
    res.status(200).send("TUDO OK")
})


app.listen(port, () => console.log(`Servidor Rodando na porta ${port} ` + new Date().toLocaleTimeString()))