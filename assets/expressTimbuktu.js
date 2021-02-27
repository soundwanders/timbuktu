// express js for Timbuktu firebase database

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const admin = require('firebase-admin');
const serviceAccount = require({
  md5: 'eda9e7a4cdf706380f993f803ed84400',
  sha1: '6313a9191ce2502e6a723b6ee7a93871e12a35b0',
  sha256: '6718df7ffdb8e487e4642e50e6bfa07352c082df5f8ca4ead21ef3e045bf5b6d',
  sha384: 'ede2e2ea61c4609dc538a13397bf847cfd5644bc176e30eb49f4755c55d3ea2670bac8257ce5da0ce9997de848c5a8be',
  sha512: '772ad8508e08e8aca778260efba8ead3c94c30d3268c8c380e62353165eabd0d9c44767f8980dbaa12b439c073c3b4f55e37f6cae36767cf40983996a39af0de',
  md2: 'eb01420281a1bea210bf5a2405ad6bbd',
  md4: '3821cc8770b60a378de3641360327404',
  ripemd128: 'ab15eba2107be470a00377de118bc8a8',
  ripemd160: '1a7fdb60e3fa6f5b265bdfd8cb1cb1329d9fa5c2',
  ripemd256: 'bd30a74beee2f2250aa14f0b532a87fc12c6ead96b4559f3240dc33300e62afb',
  ripemd320: '123c0522bd9bd0b4146e70ecd9d5ebe47d52e111a6ad9b819a69f509cf31b31f85d43da041950abd',
  whirlpool: '4bc694a1a99414121f760695e672997e8151eaaccf0b8c74a48dbcc85bdf1c07cefd4c8c005f6b3c4404fc242989566739e72338e987442c85f3b7fe57075d8a',
  'tiger128,3': '342176b6c9f129cf3275539a43e297c4',
  'tiger160,3': '342176b6c9f129cf3275539a43e297c44eff048a',
  'tiger192,3': '342176b6c9f129cf3275539a43e297c44eff048a9ae99f1b',
  'tiger128,4': '0069b79a84a6046c799dba9e16ae1b07',
  'tiger160,4': '0069b79a84a6046c799dba9e16ae1b07a850626e',
  'tiger192,4': '0069b79a84a6046c799dba9e16ae1b07a850626e188f5104',
  snefru: 'b52cc24bde332ea5b9cbc2188f052b179407dbe4c6d797a2e6ea242cf7d82036',
  gost: 'bfa64d875d9c8e06a35f79da9291d85f29270bd7669a8d287714cf7dca7550f8',
  adler32: 'fb2a19ec',
  crc32: '50dc629f',
  crc32b: 'eee584a1',
  'haval128,3': 'cf50b4281063e7e0d3c5cf6729625ba4',
  'haval160,3': '9569136cadc35e3dfcaa063786595ee99a08417d',
  'haval192,3': '3793666db567be772391d89f074491a8a89bc775bf26acc4',
  'haval224,3': '0898c6ed011f6b640ce8a92c777ba054f4061df5fe6a59e80685140d',
  'haval256,3': '358c316d0e287dda6d0b387880b1c8c5662c07037ca43b74e866f46ec6b513cf',
  'haval128,4': '09edcad41ed39f548d1b6fec4439ad95',
  'haval160,4': 'c7ee516a61f1cbef78810e72d5e74724080b7fe8',
  'haval192,4': 'f1f9c5e36fde7c32147a39113d1438df7bbb9cabc93efc4f',
  'haval224,4': 'b9b87c56f70f728f982d5310c2734f6f33436a21c58076328bc710e4',
  'haval256,4': '5ac562e751fa79e92be286c4c40eef5be54b5b69ae02952acdf88da788a6db0d',
  'haval128,5': '1677ef27fe058f31683e41e9c8e7c2a8',
  'haval160,5': 'b964494385096f600dac7bbb3b4ce909df79f6e0',
  'haval192,5': 'd9b22221ac4abadf0551096ef013b24bde6de131eac17d70',
  'haval224,5': 'b57499871177ee059dde05ab1b7001415870db505a7dfdc35e5d675e',
  'haval256,5': '2b16b88535a848d985f65dbb86053104d4c44bd99ccec347da4e1ce344a1c445'
});

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://timbuktu-42c57-default-rtdb.firebaseio.com'
});

app.use(express.json());
app.use(express.static('public'));

// GET
app.get('/', (req, res) => {
  res.send('index');
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
  // SORT data by civilization name
  rootRef.orderByChild('civilization').startAt('A', 'a').on('value', snapshot => {
    console.log(snapshot(val()));
  });
  // UPDATE database
  updates['/timbuktu/' + autoId] = newData;
  database.ref().update(updates);
  console.log('Database updated');
});

// DELETE
app.delete('/remove', (req, res) => {
  rootRef.child(req.body.timbuktu).remove();
  console.log('Data deleted');
});

app.listen(port, () => {
  console.log(`Timbuktu is listening to port ${port}`);
});
