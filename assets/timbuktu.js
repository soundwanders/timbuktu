


// FIREBASE REALTIME DATABASE
  // Delete old data, Create new database entry
  const saveButton = document.getElementById('saveData').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    // REMOVE old data
    rootRef.child(userId ?? autoId).remove();
    // SAVE new data
    rootRef.child(userId ?? autoId).set({
      timbuktu: JSON.stringify(timbuktu)
    })
    console.log('Saved new data to database');
  });

  // LOAD database (takes a snapshot of the referenced data, then parse to timbuktu array);
  const getData = document.getElementById('getData').addEventListener('click', (e) => {
    e.preventDefault;
    e.stopImmediatePropagation;

    rootRef.child.once('value') , function (snapshot) {
      //timbuktu = snapshot.toArray(JSON.parse(timbuktu));
      timbuktu.forEach(Book => timbuktu.push(Book)) ,
      console.log('Data loaded', timbuktu);
    },
      function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error, unable to load data from the database', errorCode, errorMessage);
      }
  });
