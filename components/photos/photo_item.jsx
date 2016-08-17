var React = require('react');

var PhotoItem = React.createClass({
  render: function() {
    return(
      <img src={this.props.photo.image_url}/>
    )
  }
});

module.exports = PhotoItem;
