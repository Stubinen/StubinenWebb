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
      {src: 'https://api.stubinen.org/img/postersHT24/bullettrain.png', caption: 'Bullet Train', date: "2024-09-01",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/video/vi1743438361/"},
      {src: 'https://api.stubinen.org/img/postersHT24/little_women.png', caption: 'Little Women', date: "2024-09-15",text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/video/vi2655304729/"},
      {src: 'https://api.stubinen.org/img/postersHT24/the_handmaiden.png', caption: 'The Handmaiden', date: "2024-10-06",text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/video/vi3452614681/"},
      {src: 'https://api.stubinen.org/img/postersHT24/snatch.png', caption: 'Snatch', date: "2024-10-20",text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/video/vi1558577433/"},
      {src: 'https://api.stubinen.org/img/postersHT24/akira.png', caption: 'Akira', date: "2024-11-03",text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/video/vi1723138329/"},
      {src: 'https://api.stubinen.org/img/postersVT24/MV.png', caption: 'Members Choice', date: "2024-11-17",text: translate("BeskrivFilm6"), vidID :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
      {src: 'https://api.stubinen.org/img/postersHT24/her.png', caption: 'Her', date: "2024-11-24",text: translate("BeskrivFilm7"), vidID :"https://www.imdb.com/video/vi1211672857/"},
      {src: 'https://api.stubinen.org/img/postersHT24/the_dictator.png', caption: 'The Dictator', date: "2024-12-08",text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/video/vi663134233/"},
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
          <h1>
          {notShownItems.length != 0 ? translate("SkaSpelas"): ''}
          </h1>
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
