$(function() {

  $('.one').hover(
    function() {
      $('.two').css('opacity', '0.5'),$('.three').css('opacity', '0.5'),$('.four').css('opacity', '0.5');
    },
    function() {
      $('.work-box').css('opacity', '1.0');
    }
  );

  $('.two').hover(
    function() {
      $('.one').css('opacity', '0.5'),$('.three').css('opacity', '0.5'),$('.four').css('opacity', '0.5');
    },
    function() {
      $('.work-box').css('opacity', '1.0');
    }
  );

  $('.three').hover(
    function() {
      $('.one').css('opacity', '0.5'),$('.two').css('opacity', '0.5'),$('.four').css('opacity', '0.5');
    },
    function() {
      $('.work-box').css('opacity', '1.0');
    }
  );

  $('.four').hover(
    function() {
      $('.one').css('opacity', '0.5'),$('.two').css('opacity', '0.5'),$('.three').css('opacity', '0.5');
    },
    function() {
      $('.work-box').css('opacity', '1.0');
    }
  );

})