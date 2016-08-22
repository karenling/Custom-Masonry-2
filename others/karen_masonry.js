var $ = require('jquery');
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );

var Masonry = function(selector, padding) {
  this.$selector = $(selector);
  this.padding = padding;
  this.setupContainer();
  this.resize();
};

Masonry.prototype.setupContainer = function() {
  this.$selector.css('position', 'relative');
  this.containerWidth = this.$selector.width();
  var columns = this.getColumns(this.containerWidth);
  var totalMargins = (columns + 1) * this.padding;
  this.itemWidth = (this.containerWidth - totalMargins)/columns;
  this.$selector.find('> div').height('');
  this.$selector.find('> div').width(this.itemWidth);
  this.positions = [];
  for(i=0; i<columns; i++) {
    this.positions.push(this.padding);
  }
};

Masonry.prototype.resize = function() {
  this.$selector.find('> div').each(function(idx,item) {
    this.handleResize(idx,item);
    this.updateContainerHeight();
  }.bind(this));
};

Masonry.prototype.handleResize = function(idx,item) {
  var minPos = Math.min.apply(null,this.positions);
  var minIdx = this.positions.indexOf(minPos);
  var ratio = $(item).height() / $(item).width();
  var height = this.itemWidth * ratio;
  $(item).css('top', minPos);
  $(item).css('left', minIdx * this.itemWidth + this.padding*(minIdx+1));
  this.positions[minIdx] += height + this.padding;
};

Masonry.prototype.updateContainerHeight = function() {
  this.$selector.height(Math.max.apply(null,this.positions));
};

Masonry.prototype.getColumns = function() {
  if (this.containerWidth < 544) {
    return 1;
  } else if (this.containerWidth < 768) {
    return 2;
  } else if (this.containerWidth < 992) {
    return 3;
  } else {
    return 4;
  }
};

KarenMasonry = function(selector,padding) {
  $(selector).imagesLoaded( function() {
    new Masonry(selector,padding);
  });
};
