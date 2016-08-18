var React = require('react');
var ClientActions = require('../../actions/client_actions');
var $ = require('jquery');

var PhotoItem = React.createClass({
  getInitialState: function() {
    return({
      liked: false
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
      <article className='img-item' onClick={this.handleClick} onMouseOver={this.toggleViews}>
        <img
          data-ratio={this.props.photo.width / this.props.photo.height}
          alt={this.props.photo.name}
          src={this.props.photo.image_url}
        />
        <div className='img-desc'>
          <span>{this.props.photo.name}</span>
          <span>{this.props.photo.times_viewed}</span>
          <span>{this.state.liked.toString()}</span>
        </div>
      </article>
    )
  }
});

module.exports = PhotoItem;
