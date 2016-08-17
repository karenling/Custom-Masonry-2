var $ = require('jquery');
var ServerActions = require('../actions/server_actions');

var apiUtil = {
  fetchPopularPhotos: function(page) {
    $.ajax({
      url: 'https://api.500px.com/v1/photos?feature=popular',
      data: {
        image_size: 4,
        consumer_key: '80QdMMZx9Uv6uNJCp7REM47GzG5e0mOno5DhtkbY',
        page: page
      },
      type: 'GET',
      success: function(photos) {
        ServerActions.receiveAllPhotos(photos);
      }
    });
  }
};

module.exports = apiUtil;
