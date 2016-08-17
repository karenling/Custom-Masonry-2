var React = require('react');
var ClientActions = require('../../actions/client_actions');

var PhotoItem = React.createClass({
  getInitialState: function() {
    return({
      liked: true
    })
  },
  handleClick: function() {
    this.setState({
      liked: !this.state.liked
    })
    ClientActions.likePhoto(this.state.liked);
  },
  render: function() {
    return(
      <article onClick={this.handleClick}>
        <img src={this.props.photo.image_url}/>
        <span>{this.props.photo.name}</span>
        <span>{this.props.photo.times_viewed}</span>
        <span>{this.state.liked.toString()}</span>
      </article>
    )
  }
});

module.exports = PhotoItem;
