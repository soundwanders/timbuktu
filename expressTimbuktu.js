// express js for Timbuktu firebase database
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('public'));

// GET
app.get('/', (req, res) => {
  res.send('timbuktu');
});

// POST
app.post('/save', (req, res) => {
  rootRef.child(autoId).set({
    timbuktu: req.body.JSON.stringify(timbuktu)
  });
});

// PUT
app.put('/update', (req, res) => {
  const newData = {
    timbuktu: req.body.JSON.stringify(timbuktu)
  };
  const updates = {};
  // SORT data by civilization name before sending to database
  rootRef.orderByChild('civilization').startAt('A').on('value', snapshot => {
    console.log(snapshot(val()));
  });
  // UPDATE database, pair data with with userId or if userId is unavailable use autoId.
  updates['/library/' + userId ?? autoId] = newData;
  database.ref().update(updates);
  console.log('Database updated');
});

// DELETE
app.delete('/remove', (req, res) => {
  rootRef.child(req.body.timbuktu).remove();
  console.log('Data deleted');
});

app.listen(port, () => {
  console.log('Timbuktu is listening to port ${port}');
});
