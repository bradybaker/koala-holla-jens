console.log('js');

$(document).ready(function () {
  console.log('JQ');
  // Establish Click Listeners
  setupClickListeners()
  $('#viewKoalas').on('click', '.transferReady', transferStatus);
  // load existing koalas on page load
  getKoalas();
}); // end doc ready

function setupClickListeners() {
  $('#addButton').on('click', function () {
    console.log('in addButton on click');
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      readyForTransfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val(),
    };
    // call saveKoala with the new obejct
    saveKoala(koalaToSend);
  });
}

function getKoalas() {
  console.log('in getKoalas');
  // ajax call to server to get koalas
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then(function (response) {
    console.log(response)
    renderKoalas(response);
  }).catch(function (error) {
    console.log('Error in client.js GET', error)
  });
} // end getKoalas

function saveKoala(newKoala) {
  console.log('in saveKoala', newKoala);
  // ajax call to server to get koalas
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: newKoala
  }).then( function(response) {
    getKoalas();
    emptyKoalas();
  }).catch( function(error) {
    console.log('Error', error);
    alert('Something bad happened. Try again later.');
  })

}

function renderKoalas(koalas) {
  $('#viewKoalas').empty();
  for (let item of koalas) {
    $('#viewKoalas').append(`<tr data-id="${item.id}">
                            <td>${item.name}</td>
                            <td>${item.age}</td>
                            <td>${item.gender}</td>
                            <td>${item.ready_to_transfer}</td>
                            <td><button class="transferReady">Ready for Transfer</button></td>
                            <td>${item.notes}</td></tr>`);
  }
}

function transferStatus(){
  let koalaId = $(this).closest('tr').data('id');
  console.log(koalaId);
  $.ajax({
    method: 'PUT',
    url: `/koalas/${koalaId}`, 
    data: koalaId
}).then( function(response) {
    getKoalas();
}).catch( function(error){
    console.log('Error:', error);
    alert('Something bad happened. Try again later');
})
}

  function emptyKoalas() {
    $('#nameIn').val('');
    $('#ageIn').val('');
    $('#genderIn').val('');
    $('#readyForTransferIn').val('');
    $('#notesIn').val('');
}