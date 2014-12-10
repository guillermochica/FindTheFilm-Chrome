

$('document').ready(function() {
    $('#submit').click(function() {
        var title = $('#film').val();
        var year = $('#inputyear').val();

        $.get( 'http://www.omdbapi.com/?t=' + title + '&y=' + year + '&plot=short&r=json', function( data ) {
          datos = JSON.parse(data);
          $( "#title" ).html('<b>Title: </b>' +  datos.Title);
          $("#year").html('<b>Year: </b>' +  datos.Year);
          $("#director").html('<b>Director: </b>' +  datos.Director);
          $("#actors").html('<b>Actors: </b>' +  datos.Actors);
          $("#country").html('<b>Country: </b>' +  datos.Country);
          $("#language").html('<b>Language: </b>' +  datos.Language);
          $("#runtime").html('<b>Runtime: </b>' +  datos.Runtime);
          $("#plot").html('<b>Plot: </b>' +  datos.Plot);
      });
    });

});
