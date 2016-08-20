var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );

var masonry = function(selector, padding) {
  $(selector + '> div').height('');
  containerWidth = $(selector).width();
  var currentDivs = [];
  var currentRowRatio = 0;
  var positions = [];
  var ratioMaxx = getRatioMax();
  var totalMargins = (ratioMaxx + 1) * padding;
  var width = (containerWidth - totalMargins)/ratioMaxx;
  $(selector + '> div').width(width);
  for(i=0; i<ratioMaxx; i++) {
    positions.push(padding);
  }
  $('.img-item').each(function(idx, div) {
    currentDivs.push(div);
    if (currentDivs.length >= ratioMaxx) {
      positions = resizeRow(currentDivs, width, positions, selector, padding);
      currentDivs = [];
      currentRowRatio = 0;
    }
  });
  resizeRow(currentDivs, width, positions, selector, padding);
};

var resizeRow = function(currentDivs, width, positions, selector, padding) {
  var newPositions = [];
  currentDivs.forEach(function(currentDiv, idx) {
    var ratio = $(currentDiv).height() / $(currentDiv).width();
    var height =  width * ratio;
    $(currentDiv).width(width);
    $(currentDiv).height(height);
    $(currentDiv).css('top', positions[idx]);
    $(currentDiv).css('left', idx * width + padding*(idx+1));
    newPositions.push(height + positions[idx] + padding);
  });
  $(selector).height(Math.max.apply(null, newPositions));
  return newPositions;
};

var getRatioMax = function() {
  if (containerWidth < 768) {
    return 1;
  } else if (containerWidth < 992) {
    return 2;
  } else {
    return 4;
  }
};

KarenMasonry = function(selector, padding) {
  $(selector).css('position', 'relative');
  $('#karen-masonry').imagesLoaded( function() {
    masonry(selector, padding);
  });
};
