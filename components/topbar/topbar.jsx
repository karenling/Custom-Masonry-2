var React = require('react');
var PhotoStore = require('../../stores/photo_store');

var TopBar = React.createClass({
  getInitialState: function() {
    return({
      totalLikes: PhotoStore.totalLikes()
    })
  },
  componentDidMount: function() {
    this.listener = PhotoStore.addListener(this._onChange);
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  _onChange: function() {
    this.setState({
      totalLikes: PhotoStore.totalLikes()
    })
  },
  render: function() {
    return(
      <div>{this.state.totalLikes}</div>
    )
  }
});

module.exports = TopBar;
