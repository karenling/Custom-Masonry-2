var ApiUtil = require('../util/api_util');
var PhotoStore = require('../stores/photo_store');

var ClientActions = {
  fetchPopularPhotos: function(page) {
    if (page <= PhotoStore.totalPages()) {
      ApiUtil.fetchPopularPhotos(page);
    }
  }
};

module.exports = ClientActions;
