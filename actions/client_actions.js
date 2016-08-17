var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchPopularPhotos: function(page) {
    ApiUtil.fetchPopularPhotos(page);
  }
};

module.exports = ClientActions;
