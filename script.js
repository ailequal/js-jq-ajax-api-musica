$(document).ready(function() {

  // add all album automatically
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data, state) {
      var arrayAlbum = data.response;
      for (var i = 0; i < arrayAlbum.length; i++) {
        var album = arrayAlbum[i];
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

  // store genre option variable
  var option = $('.nav-bar .genre select').val();
  console.log(option);

  // when the genre is changed the album are changed
  $(document).on('change', '.nav-bar .genre select', function() {
    // genre option is updated
    option = $(this).val();
    console.log(option);

    // only albums matching the selected genre are added, all the other are removed
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/array/music",
      method: "GET",
      success: function(data, state) {
        $('.cds-container.container').text('');
        console.log(data.response);
        var arrayAlbum = data.response;
        for (var i = 0; i < arrayAlbum.length; i++) {
          var album = arrayAlbum[i];
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

});
