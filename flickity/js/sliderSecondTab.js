let flktySecond = new Flickity(".Slider", {
  setGallerySize: false,
  pageDots: false,
  initialIndex: 1 
});


const transformer = new FlickityTransformer(flktySecond, [
  {
    name: "scale",
    stops: [
      [-300, 0.5],
      [0, 1.2],
      [300, 0.5]
    ]
  }
]);
