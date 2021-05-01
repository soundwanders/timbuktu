  
 /*
 // Load Data Button
const getData = document.getElementById('getData').addEventListener('click', (e) => {
  e.preventDefault;
  e.stopImmediatePropagation;


 rootRef.once('value', (snapshot) => {
     snapshot.forEach((childSnapshot) => {
      const sna = JSON.stringify(timbuktu);
      const chil = JSON.stringify(childSnapshot.val());
      const chep = childSnapshot.exportVal();
      const chez = JSON.parse(sna);

      const snarf = {};
      snarf["civilization"] = chep.timbuktu.civilization.value;
      snarf["title"] =  chep.timbuktu.title.value;
      snarf["author"] = chep.timbuktu.author.value;
      snarf["format"] = chep.timbuktu.format.value;

      console.log("-------snarf vvv------")
      console.log(snarf);
      console.log("-------chil vvv------")
      console.log(chil);
      console.log("-------chep vvv------")
      console.log(chep);
 
      const eSnap = {};
      eSnap["civilization"] = childSnapshot.exportVal().civilization;
      eSnap["title"] = childSnapshot.exportVal().title;
      eSnap["author"] = childSnapshot.exportVal().author;
      eSnap["format"] = childSnapshot.exportVal().format;

      const newArray = [];
      const twoArray = [];


      console.log("-------book vvv------")
      console.log(mybook);


      newArray.push(snarf);
      twoArray.push(chil);

      console.log("-------newArray vvv------")
      console.log(newArray);

      console.log("-------TWOarray vvv------")
      console.log(twoArray);

      render();

      console.log("-------timbuktu vvv------")
      console.log(timbuktu);

      console.log(sna.civilization.value);
      console.log(sna.civilization);

    })
    console.log('Data loaded');
  }) 
});

*/