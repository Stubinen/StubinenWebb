import React, { Component } from 'react';
import Button from './Button';
import '../styles/PosterSection.css';
import Box from 'react-layout-components';
import YouTube from 'react-youtube';

class HighlightedPoster extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.opts={};
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    this.opts = {
      width:(this.state.width -140)/2,
      height: (this.state.width-140)/3.555555,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
    return (
        <div className='row NextPoster'>
          <Box justifyContent="center" alignItems="flex-start">
            <Box flex={1}>
              <img src={this.props.poster} />
            </Box>
            <Box flex={1} justifyContent="center" alignItems="flex-start" column>
              <h1>Nästa Film: {this.props.title}</h1>
              <p>{this.props.text}</p>
              <p> Datum: {this.props.date} </p>
            </Box>
            <Box flex={2} justifyContent="center" alignItems="flex-start" column>
              <YouTube
                videoId={this.props.vidID}
                opts={this.opts}
                onReady={this._onReady}
              />
            </Box>
          </Box>
        </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


export default HighlightedPoster
