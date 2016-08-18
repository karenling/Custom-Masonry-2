var React = require('react');
var ReactDOM = require('react-dom');
var PhotoIndex = require('./components/photos/photo_index');
var TopNav = require('./components/topbar/topbar');

var Gallery = React.createClass({
  render: function() {
    return(
      <div>
        <TopNav/>
        <PhotoIndex/>
      </div>
    )
  }
})
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Gallery/>, document.getElementById('react-block'));
})
