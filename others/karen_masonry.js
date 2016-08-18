var $ = require('jquery');

var masonry = function(selector, padding) {
  containerWidth = $(selector).width() - padding;
  var height;
  var currentImages = [];
  var currentRow = 0;
  $('.img-item img').each(function(idx, img) {
    var ratio = $(img).data('ratio');
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
    var ratio = $(currentImg).data('ratio');
    $(currentImg).parent().width(height * ratio);
    $(currentImg).parent().height(height);
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
  $(selector).css('margin', padding/2);
  masonry(selector, padding);
};
