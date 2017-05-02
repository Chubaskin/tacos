// Userlist data array for filling in info box
var userData = [];
// DOM Ready =============================================================
$(document).ready(function() {
    // Populate the user table on initial page load
    // populateTable();
    populateUserPoints();
});

// Functions =============================================================

// fill data
function populateUserPoints(){
  // Empty content string
  var pointsContent = '';
  const userId = "5900e083baf099a4a7d95776";

  // jQuery AJAX call for JSON
  $.getJSON( '/users/userdata/' + userId, function( data ) {
    userPointsData = data;
    //Populate Info Box
    $('#userInfoName').text(userPointsData.nombreCompleto);
    $('#userInfoTotal').text(userPointsData.puntos);
    $('#courseInfoTotal').text(userPointsData.puntosCurso);
    populateComentarios(data.actividad);

}); // getJSON

}

// Fill table with data
function populateComentarios( dataComm ) {

    // Empty content string
    var tableContent = '';

    // Stick our user data array into a userlist variable in the global object
    userComm = dataComm;

    // For each item in our dataComm, add a table row and cells to the content string
    $.each(dataComm.publicaciones, function(){
        texto = this.texto || "";
        if (texto.length > 1) {
          // alert(texto);
          tableContent += '<tr>';
          tableContent += '<td><a href="#" class="linkshowcomment" rel="' + this.publicacionId + '" title="Show Details">' + texto + '</a></td>';
          tableContent += '<td>' + this.foto + '</td>';
          tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
          tableContent += '</tr>';
        }
    });
    // Inject the whole content string into our existing HTML table
    $('#userList table tbody').html(tableContent);
    alert(tableContent);

};
