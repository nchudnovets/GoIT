var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};


function multiplyNumeric (image) {
  for (var prop in image) {
    if (typeof(image[prop]) == 'number'){
      image[prop] *= 2;
    };
  };
  return image;
};
