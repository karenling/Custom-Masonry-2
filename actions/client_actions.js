var ApiUtil = require('../util/api_util');
var PhotoStore = require('../stores/photo_store');
var ServerActions = require('./server_actions');

var ClientActions = {
  fetchPopularPhotos: function(page) {
    if (page <= PhotoStore.totalPages()) {
      ApiUtil.fetchPopularPhotos(page);
    }
  },
  likePhoto: function(value) {
    ServerActions.receiveLike(value);
  }
};

module.exports = ClientActions;
