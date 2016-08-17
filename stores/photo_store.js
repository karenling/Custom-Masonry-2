var Store = require ('flux/utils').Store;
var dispatcher = require('../dispatcher/dispatcher');
var PhotoStore = new Store(dispatcher);
var PhotoConstants = require('../constants/photo_constants')

var _photos = [];
var _currentPage = 0;

PhotoStore.all = function() {
  return _photos;
};

PhotoStore.nextPage = function() {
  return _currentPage + 1;
};

PhotoStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PhotoConstants.PHOTOS_RECEIEVED:
      resetPhotos(payload.photos.photos);
      updateCurrentPage(payload.photos.current_page);
      PhotoStore.__emitChange();
  }
};

var resetPhotos = function(photos) {
  console.log(photos)
  _photos = photos;
};

var updateCurrentPage = function(page) {
  _currentPage = page;
}
module.exports = PhotoStore;
