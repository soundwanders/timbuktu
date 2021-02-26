// express js server side code for Timbuktu database

const express = require('express');
const app = express();
const port = 3000;
const database = firebase.database();
const rootRef = database.ref('/timbuktu/');
const autoId = rootRef.push.key();

const admin = require('firebase-admin');
const serviceAccount = require("home/broop/Desktop/timbuktu-42c57-firebase-adminsdk-5gfn5-90af882f4e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://timbuktu-42c57-default-rtdb.firebaseio.com"
});

app.use(express.json());
app.use(express.static('public'));

// GET
app.get('/', (req, res) => {
    res.send('index');
});

// POST 
app.post('/save' , (req, res) => {
    rootRef.child(autoId).set({
        timbuktu: req.body.JSON.stringify(timbuktu)
    });

});

// PUT
app.put('/update' , (req, res) => {
    const newData = {
        timbuktu: req.body.JSON.stringify(timbuktu)
    }
    const updates = {};
    // SORT data by civilization name
    rootRef.orderByChild('civilization').startAt('A','a').on('value' , snapshot => {
    console.log(snapshot(val()));
    })
    // UPDATE database
    updates['/timbuktu/' + autoId] = newData;
    database.ref().update(updates);
    console.log("Database updated");
});

// DELETE
app.delete('/remove' , (req, res) => {
    rootRef.child(req.body.timbuktu).remove();
    console.log("Data deleted");
})

app.listen(port, () => {
    console.log(`Timbuktu is listening to port ${port}`);
});

