var React = require('react');
var ReactDOM = require('react-dom');

var MasonryGallery = React.createClass({
  render: function() {
    return(
      <div>Hey hey</div>
    )
  }
})

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<MasonryGallery/>, document.getElementById('react-block'));
})
