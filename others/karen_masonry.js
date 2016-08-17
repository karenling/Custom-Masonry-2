var $ = require('jquery');

var masonry = function(selector, padding = 10) {
  containerWidth = $(selector).width() - padding;
  $(selector).css('margin', padding/2)
  var height = containerWidth/3;
  var currentImages = [];
  var currentRow = 0;
  $('.img-item img').each(function(idx, img) {
    var ratio = $(img).width()/$(img).height();
    currentImages.push(img);
    currentRow += ratio;
    if (currentRow >= ratioMax()) {
      var totalMargins = (currentImages.length - 1) * padding;
      height = (containerWidth - totalMargins)/currentRow;
      resizeRow(currentImages, currentRow, height, padding);
      currentImages = [];
      currentRow = 0;
    }
  });
  resizeRow(currentImages, currentRow, height, padding);
};

var resizeRow = function(currentImages, currentRow, height, padding) {
  currentImages.forEach(function(currentImg) {
    $(currentImg).height(height);
    $(currentImg).parent().css('margin', padding/2);
  });
};

var ratioMax = function() {
  if (containerWidth < 500) {
    return 0;
  } else if (containerWidth < 800) {
    return 3;
  } else {
    return 5;
  }
};

KarenMasonry = function(selector, padding) {
  var containerWidth = $(selector).width();
  masonry(selector, padding);
};
