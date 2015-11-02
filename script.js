$('document').ready(function() {
    $('#submit').click(function() {
        var title = $('#film').val();
        var year = $('#inputyear').val();
        if (title != '') {
          $.get( 'http://www.omdbapi.com/?t=' + title + '&y=' + year + '&plot=short&r=json', function( datos ) {
            //datos = JSON.parse(data);
            $( "#title" ).html('<b>Title: </b>' +  datos.Title);
            $("#year").html('<b>Year: </b>' +  datos.Year);
            $("#director").html('<b>Director: </b>' +  datos.Director);
            $("#actors").html('<b>Actors: </b>' +  datos.Actors);
            $("#country").html('<b>Country: </b>' +  datos.Country);
            $("#language").html('<b>Language: </b>' +  datos.Language);
            $("#runtime").html('<b>Runtime: </b>' +  datos.Runtime);
            $("#plot").html('<b>Plot: </b>' +  datos.Plot);
            var string = '<img src= "' + datos.Poster + '" width="150" height="211"/>';
            $("#poster").html(string);
            var link = '<a href="http://www.imdb.com/title/' + datos.imdbID + '">Link to IMDb</a> (Control + click to open)';
            $("#imdblink").html(link);

          });
        }
    });

});
