var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var LikeStore = new Store(Dispatcher);
var LikeConstants = require('../constants/like_constants');

var _totalLikes = 0;

LikeStore.totalLikes = function() {
  return _totalLikes;
};

LikeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case LikeConstants.PHOTO_LIKED:
      updateLikes(payload.value);
      LikeStore.__emitChange();
      break;
  }
};

var updateLikes = function(status) {
  _totalLikes += (status ? 1 : -1);
};

module.exports = LikeStore;
