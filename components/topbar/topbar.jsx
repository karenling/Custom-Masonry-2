var React = require('react');
var LikeStore = require('../../stores/like_store');

var TopBar = React.createClass({
  getInitialState: function() {
    return({
      totalLikes: LikeStore.totalLikes()
    })
  },
  componentDidMount: function() {
    this.listener = LikeStore.addListener(this._onChange);
  },
  componentWillUnmount: function() {
    this.listener.remove();
  },
  _onChange: function() {
    this.setState({
      totalLikes: LikeStore.totalLikes()
    })
  },
  render: function() {
    return(
      <div>{this.state.totalLikes}</div>
    )
  }
});

module.exports = TopBar;
