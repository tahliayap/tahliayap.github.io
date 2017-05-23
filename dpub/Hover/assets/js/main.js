$(document).ready(function() {

    $('.number').mouseenter(function() {
      $('.footnote').addClass('showme');
    });

    $('.number').mouseleave(function() {
      $('.footnote').removeClass('showme');
    });


      $('.mainheading').mouseenter(function() {
        $('.secondheading').addClass('showme');
      });

      $('.mainheading').mouseleave(function() {
        $('.secondheading').removeClass('showme');
      });

      $('img').click(function() {
        $(this).toggleClass('enlarge');
      });

});
