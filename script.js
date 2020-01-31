$(document).ready(function() {

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data, state) {
      console.log(data);
    },
    error: function(request, state, error) {
      console.log(error);
    }
  });


  var source = $('#template').html();
  var template = Handlebars.compile(source);

  var context = {
    'title': 'hello world',
    'paragraph': 'lorem lorem is lorem'
  };

  var html = template(context);

  $('body').append(html);

});
