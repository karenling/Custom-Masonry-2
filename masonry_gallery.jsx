var React = require('react');
var ReactDOM = require('react-dom');
var PhotoIndex = require('./components/photos/photo_index');

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<PhotoIndex/>, document.getElementById('react-block'));
})
