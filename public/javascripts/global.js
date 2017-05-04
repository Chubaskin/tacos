// Userlist data array for filling in info box
var userData = [];
// DOM Ready =============================================================
$(document).ready(function() {
    // Populate the user table on initial page load
    // populateTable();
    var pointsContent = '';
    const userId = "5900e083baf099a4a7d95776";
    populateUserPoints(userId);
    populateComentarios(userId);
});

// Functions =============================================================

/////////////////////////////////////////////////
// Data de los usuarios
function populateUserPoints(userId){
  // Empty content string

  // jQuery AJAX call for JSON
  $.getJSON( '/users/userdata/' + userId, function( data ) {
    userPointsData = data;
    //Populate Info Box
    $('#userInfoName').text(userPointsData.nombreCompleto);
    $('#userInfoTotal').text(userPointsData.puntos);
    $('#courseInfoTotal').text(userPointsData.puntosCurso);

    // Comentarios
    populateComentarios(data.actividad);
}); // getJSON

}  // populateUserPoints

/////////////////////////////////////////////////
// Fill table with data
function populateComentarios( userId ) {

    // Empty content string
    var tableContent = '';

    // Stick our user data array into a userlist variable in the global object
    userComm = '';
    // jQuery AJAX call for JSON
    $.getJSON( '/users/comentarios/' + userId, function( data ) {
      userComm += data||{};
      alert('resultado:'+userComm);
  }); // getJSON

/*
    // For each item in our dataComm, add a table row and cells to the content string
    $.each(userComm.publicaciones, function(){
        texto = this.texto || "";
        if (texto.length > 1) {
          // alert(texto);
          tableContent += '<tr>';
          tableContent += '<td><a href="#" class="linkshowcomment" rel="' + this.publicacionId + '" title="Show Details">' + texto + '</a></td>';
          tableContent += '<td>' + this.foto + '</td>';
          tableContent += '<td><a href="#" class="linknewcomment" rel="' + this._id + '">Responder</a></td>';
          tableContent += '</tr>';
        }
    });
    // Inject the whole content string into our existing HTML table
    $('tbody').html(tableContent);
    // alert(tableContent);
*/

};
