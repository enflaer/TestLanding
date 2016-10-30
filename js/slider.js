var slider = $('#carousel .carousel-slider');
var item = $('#carousel .catousel-item');
var total = item.length;
var width = item.width();
var index = 0;
var speed = 500;

slider.width( total * width );

function carouselSlide(index) {
  slider.stop().animate({left: -index * width +'px'}, speed);
};

$('.carousel-prev').on('click', function() {
  index -= 1;
  carouselSlide( index = (index < 0) ? total - 1 : index );
});

$('.carousel-next').on('click', function() {
  index += 1;
  carouselSlide( index = (index > total - 1) ? 0 : index );
});