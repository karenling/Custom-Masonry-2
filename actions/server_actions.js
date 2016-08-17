var dispatcher = require('../dispatcher/dispatcher');
var PhotoConstants = require('../constants/photo_constants');
var LikeConstants = require('../constants/like_constants');

var ServerActions = {
  receiveAllPhotos: function(photos) {
    dispatcher.dispatch({
      actionType: PhotoConstants.PHOTOS_RECEIEVED,
      photos: photos
    });
  },
  receiveLike: function(value) {
    dispatcher.dispatch({
      actionType: LikeConstants.PHOTO_LIKED,
      value: value
    });
  }
};

module.exports = ServerActions;
