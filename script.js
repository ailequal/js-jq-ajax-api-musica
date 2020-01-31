$(document).ready(function() {

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data, state) {
      var arrayAlbum = data.response;
      for (var i = 0; i < arrayAlbum.length; i++) {
        var album = arrayAlbum[i];
        album['img-src'] = album.poster;
        delete album.poster;
        console.log(album);
        // handlebars
        var source = $('#template').html();
        var template = Handlebars.compile(source);
        var context = album;
        var html = template(context);
        $('.cds-container.container').append(html);
      }
    },
    error: function(request, state, error) {
      console.log(error);
    }
  });

});


// how to edit an object key??
// obj = { name: 'Bobo' }
// obj.somethingElse = obj.name
// delete obj.name
