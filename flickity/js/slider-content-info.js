var flkty1 = new Flickity( '.carousel-main', {
    sync:".carousel-nav",
    prevNextButtons:false,
    fullscreen: true
});

var flkty2 = new Flickity( '.carousel-nav', {
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false
  });

  flkty1.resize()
  flkty2.resize()

