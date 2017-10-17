// TODO: add closure for security
// initialize database
firebase.initializeApp(config);
var database = firebase.database();

// wait for database changes and update view
database.ref('waitlist').orderByChild("id").limitToFirst(4).on('value', (snapshot) => {

  // extract waitlist
  var waiting = Object.values(snapshot.val());

  // clearn number list
  var list = document.getElementById("numberList");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  // if list is empty, set to default
  if (!waiting) {
    document.getElementById('next').innerHTML = '-';
  }

  waiting.sort(function(a, b){
    return a.id - b.id;
  }).map(function(value, index){

    // first index into the next placement,
    // others into the numbers list
    if(!index) {
      document.getElementById('next').innerHTML = value.id;
    } else {

      // initialize new paragraph element and set its properties
      var newNumber = document.createElement("P");
      newNumber.innerHTML = value.id;
      newNumber.className = 'numberSlot';

      // embed the element into the page
      document.getElementById('numberList').append(newNumber);
    }
  });
});
