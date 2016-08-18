var ApiUtil = require('../util/api_util');
var PhotoStore = require('../stores/photo_store');
var ServerActions = require('./server_actions');

var ClientActions = {
  fetchPopularPhotos: function(page) {
    if (PhotoStore.nextPage() <= PhotoStore.totalPages()) {
      ApiUtil.fetchPopularPhotos(PhotoStore.nextPage());
    }
  },
  likePhoto: function(value) {
    ServerActions.receiveLike(value);
  }
};

module.exports = ClientActions;
