$(document).ready(function() {

  $('.sz__trigger').mouseenter(function() {
      $('.sz__image').addClass('showme');
    });

    $('.sz__trigger').mouseleave(function() {
      $('.sz__image').removeClass('showme');
    });



    $('.lb__trigger').mouseenter(function() {
        $('.lb__image').addClass('showme');
      });

      $('.lb__trigger').mouseleave(function() {
        $('.lb__image').removeClass('showme');
      });



      $('.es__trigger').mouseenter(function() {
          $('.es__image').addClass('showme');
        });

        $('.es__trigger').mouseleave(function() {
          $('.es__image').removeClass('showme');
        });



        $('.wc__trigger').mouseenter(function() {
            $('.wc__image').addClass('showme');
          });

          $('.wc__trigger').mouseleave(function() {
            $('.wc__image').removeClass('showme');
          });


        $('.jb__trigger').mouseenter(function() {
          $('.jb__image').addClass('showme');
          });

          $('.jb__trigger').mouseleave(function() {
            $('.jb__image').removeClass('showme');
          });


        $('.dogb__trigger').mouseenter(function() {
          $('.dogb__image').addClass('showme');
          });

        $('.dogb__trigger').mouseleave(function() {
         $('.dogb__image').removeClass('showme');
          });





        $('.mz__trigger').mouseenter(function() {
            $('.mz__image').addClass('showme');
          });


          $('.mz__trigger').mouseleave(function() {
            $('.mz__image').removeClass('showme');
          });



  /*chat toggle*/

    $('.chat__blue').click(function() {
  $('.chat__menu').toggleClass('mini');
});

  });
