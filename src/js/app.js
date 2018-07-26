import 'slick-carousel';


// burger

$('.js-open-menu').on('click', function(e) {
  $('.main-nav').toggleClass('active');
  $(this).toggleClass('active');
});
