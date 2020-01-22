import React, { Component } from 'react';
import Button from './Button';
import '../styles/PosterSection.css';
import Box from 'react-layout-components';
import YouTube from 'react-youtube';
import HighlightedPoster from './HighlightedPoster';
import Poster from './Poster';
import Lightbox from 'react-images';
import { Container, Row, Col } from 'reactstrap';
import {DateCompare} from '../services/Dates';
import {translate} from '../services/Local';


class PosterSection extends Component {
  constructor(props) {
    super(props);
    this.state={
      lightboxIsOpen: false,
    }
    this.IMAGES = [
      { src: 'https://api.stubinen.org/img/postersVT20/ShapeOfWater.png', caption: 'The Shape of Water', date: "2020-01-26",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/videoplayer/vi4105025561?playlistId=tt5580390&ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersVT20/noPoster.png', caption: 'Taxi Driver', date: "2020-02-09", text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/title/tt0075314/videoplayer/vi474987289?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersVT20/noPoster.png', caption: 'First Reformed', date: "2020-02-23", text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/title/tt6053438/videoplayer/vi923580441?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersVT20/noPoster.png', caption: 'Blackkklansman', date: "2020-03-08", text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/title/tt7349662/videoplayer/vi2444933657?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersVT20/noPoster.png', caption: 'The Talented Mr Ripley', date: "2020-03-29", text: translate("BeskrivFilm5"), vidID :"https://www.youtube.com/watch?v=Ylc5ToQoLg0"},
      { src: 'https://api.stubinen.org/img/postersVT20/noPoster.png', caption: 'The Florida Project', date: "2020-04-19", text: translate("BeskrivFilm6"), vidID :"https://www.imdb.com/video/vi1518975513?playlistId=tt5649144&ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersVT20/noPoster.png', caption: 'Baby Driver', date: "2020-05-17", text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/video/vi2482288921?playlistId=tt3890160&ref_=tt_ov_vi"},
    ];
    this.IMAGES.sort(function(a,b) {
        return new Date(a.date) - new Date(b.date);
    });
    this.SHOWN = [];
    this.NOTSHOWN = [];

    for(var i in this.IMAGES){
        var date = new Date(this.IMAGES[i].date)
        date.setDate(date.getDate() + 1)
        if(date - Date.now() < 0){
            this.SHOWN.push(this.IMAGES[i]);
        }
        else{
            this.NOTSHOWN.push(this.IMAGES[i]);
        }
    }
  }
  render() {
      const shownItems = this.SHOWN.map((Obj) =>
          <Poster
            title={Obj.caption}
            text ={Obj.text}
            date = {Obj.date}
            poster={Obj.src}
            IMDB = {Obj.vidID}
          />
      );
      const notShownItems = this.NOTSHOWN.map((Obj) =>
          <Poster
            title={Obj.caption}
            text ={Obj.text}
            date = {Obj.date}
            poster={Obj.src}
            IMDB = {Obj.vidID}
          />
      );
    return (
      <div className='PosterSection'>
            {notShownItems}
            <h1>
            {shownItems.length != 0 ? translate("RedanSpelade"): ''}
            </h1>
            {shownItems}
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
/*
{<Lightbox
  currentImage={this.state.currentImage}
  images={this.props.images}
  isOpen={this.state.lightboxIsOpen}
  onClickImage={this.handleClickImage}
  onClickNext={this.gotoNext}
  onClickPrev={this.gotoPrevious}
  onClickThumbnail={this.gotoImage}
  onClose={this.closeLightbox}
  preventScroll={this.props.preventScroll}
  showThumbnails={this.props.showThumbnails}
  spinner={this.props.spinner}
  spinnerColor={this.props.spinnerColor}
  spinnerSize={this.props.spinnerSize}
  theme={this.props.theme}
/>}
*/

export default PosterSection
