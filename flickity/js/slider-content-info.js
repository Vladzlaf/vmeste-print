var flkty = new Flickity( '.carousel-main', {
    sync:".carousel-nav",
    prevNextButtons:false
});

var flkty2 = new Flickity( '.carousel-nav', {
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false
  });



