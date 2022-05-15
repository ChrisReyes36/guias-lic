const enlaces = document.querySelectorAll('.navegacion li');

enlaces[0].addEventListener('click', () => {
  $.ajax({
    url: 'formula1.html',
    type: 'get',
    success: function (data) {
      $('#section').html(data);
    }
  });
});

enlaces[1].addEventListener('click', () => {
  $.ajax({
    url: 'galleryview.html',
    type: 'get',
    success: function (data) {
      $('#section').html(data);
    }
  });
});

enlaces[2].addEventListener('click', () => {
  $.ajax({
    url: 'player.html',
    type: 'get',
    success: function (data) {
      $('#section').html(data);
    }
  });
});

enlaces[3].addEventListener('click', () => {
  $.ajax({
    url: 'desarrolloweb.html',
    type: 'get',
    success: function (data) {
      $('#section').html(data);
    }
  });
});

enlaces[4].addEventListener('click', () => {
  $.ajax({
    url: 'home.html',
    type: 'get',
    success: function (data) {
      $('#section').html(data);
    }
  });
});

enlaces[5].addEventListener('click', () => {
  $.ajax({
    url: 'serviciosrdb.html',
    type: 'get',
    success: function (data) {
      $('#section').html(data);
    }
  });
});