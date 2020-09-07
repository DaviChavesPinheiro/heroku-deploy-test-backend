const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

const port = process.env.PORT || 8080
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/mangas", (req, res) => {
    firestore.collection('mangas').listDocuments().then(snapShots => {
        snapShots.forEach(document => {
            document.get().then(value => {
                res.status(200).send(value.data())
            })
        })
    })
})

app.use("/", (req, res) => {
    res.status(200).send("TUDO OK")
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manga-reader-charlotte.firebaseio.com"
});

const firestore = admin.firestore();



app.listen(port, () => console.log(`Servidor Rodando na porta ${port} ` + new Date().toLocaleTimeString()))