var React = require('react');
var ReactDOM = require('react-dom');
var PostIndex = require('./components/photos/photo_index');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<PostIndex/>, document.getElementById('react-block'));
})
