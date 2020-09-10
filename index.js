const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(process.env)


const client = mongoose.connection
client.once('open', function () {
    const db = client.db
    // console.log(db.collection("listingsAndReviews").findOne({}).then(value => console.log(value)))
    // console.log(db.collection("listingsAndReviews").find({_id:"10059244"}).forEach(value => {
    //     console.log(value)
    //     console.log("################################################################")
    //     console.log("################################################################")
    //     console.log("################################################################")
    //     console.log("################################################################")
    //     console.log("################################################################")
    //     console.log("################################################################")
    //     console.log("################################################################")
    // }))
    const mangaSchema = new mongoose.Schema({
        title: String,
        description: String,
        image_url: String,
        chapters_amount: Number,
        chapters: [],
        members: Number,
        score: Number
    });
    
    const Manga = mongoose.model('Manga', mangaSchema);
    Manga.find({}).exec().then(data => {
        console.log(data)
    })
    // // Manga.create({title: "Naruto"}).then(res => {
    //     console.log(res)
    // })
});

const port = process.env.PORT || 8080
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/mangas", (req, res) => {
    res.status(200).json(process.env)
})

app.use("/", (req, res) => {
    res.status(200).send("TUDO OK")
})


app.listen(port, () => console.log(`Servidor Rodando na porta ${port} ` + new Date().toLocaleTimeString()))