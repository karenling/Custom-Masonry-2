var React = require('react');
var PhotoStore = require('../../stores/photo_store');
var ClientActions = require('../../actions/client_actions');
var PhotoItem = require('./photo_item');
var TopBar = require('../topbar/topbar');
require('../../others/karen_masonry');

var $ = require('jquery');

var PhotoIndex = React.createClass({
  getInitialState: function() {
    return({
      photos: PhotoStore.all()
    })
  },
  componentDidMount: function() {
    $(window).bind('resize', this.updateGrid)
    $(window).resize();
    ClientActions.fetchPopularPhotos();
    this.listener = PhotoStore.addListener(this._onChange);
    this.bottomListener = this.detectBottom();
  },
  componentWillUnmount: function() {
    this.listener.remove();
    this.bottomListener.remove();
    $(window).unbind('resize', this.updateGrid)
  },
  componentDidUpdate: function() {
    this.updateGrid();
  },
  updateGrid: function() {
    KarenMasonry('#karen-masonry', 10)
  },
  _onChange: function() {
    this.setState({
      photos: PhotoStore.all()
    })
  },
  detectBottom: function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() + 60 > $(document).height() - $(window).height()) {
        ClientActions.fetchPopularPhotos();
      }
    })
  },
  loader: function() {
    if (PhotoStore.nextPage() <= PhotoStore.totalPages()) {
      return(
        <div className='loader'>
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        </div>
      )
    }
  },
  render: function() {
    return(
      <div>
        <div id='karen-masonry' className='clearfix'>
          {this.state.photos.map(function(photo) {
            return(
              <PhotoItem
                key={photo.id}
                photo={photo}
              />
            )
          }.bind(this))}
        </div>
        {this.loader()}
      </div>
    )
  }
});

module.exports = PhotoIndex;
