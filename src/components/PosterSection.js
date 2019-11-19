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
      { src: 'https://api.stubinen.org/img/postersHT19/TheShining.png', caption: 'The Shining', date: "2019-09-15",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/title/tt0081505/videoplayer/vi1476002073?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersHT19/LeaveNoTrace.png', caption: 'Leave No Trace', date: "2019-09-29", text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/title/tt3892172/videoplayer/vi1901508633?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersHT19/500DaysOfSummer.png', caption: '500 Days of Summer', date: "2019-10-13", text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/title/tt1022603/videoplayer/vi2234581785?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersHT19/DoTheRightThing.png', caption: 'Do the Right Thing', date: "2019-10-27", text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/title/tt0097216/videoplayer/vi3282174233?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/postersHT19/TheVoices.png', caption: 'The Voices', date: "2019-11-10", text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/title/tt1567437/videoplayer/vi1174318617?ref_=tt_ov_vi"},
      { src: '', caption: 'Arrival', date: "2019-11-24", text: translate("BeskrivFilm6"), vidID :"https://www.imdb.com/title/tt2543164/videoplayer/vi4225807897?ref_=tt_ov_vi"},
      { src: '', caption: translate("MedlemmarnasVal"), date: "2019-12-08", text: translate("BeskrivFilm7"), vidID :"https://www.imdb.com/title/tt1489887/videoplayer/vi2100608281?ref_=vp_pl_1"},
      { src: '', caption: 'Mean Girls', date: "2019-12-15", text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/title/tt0377092/videoplayer/vi3868524825?ref_=tt_ov_vi"},
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
