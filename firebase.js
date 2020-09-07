const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://manga-reader-charlotte.firebaseio.com"
});

const firestore = admin.firestore();

firestore.collection('mangas').listDocuments().then(res => {
    res.forEach(document => {
        document.get().then(value => console.log(value.data()))
    })
})