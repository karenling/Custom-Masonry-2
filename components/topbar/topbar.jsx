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
      <div id='topbar'>
        <span className='title'>// Twinkie</span>
        <span className='total-likes'>
          {this.state.totalLikes}
        </span>
      </div>
    )
  }
});

module.exports = TopBar;
