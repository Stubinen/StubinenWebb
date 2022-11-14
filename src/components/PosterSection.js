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
      {src: 'https://api.stubinen.org/img/postersHT22/GBH.jpg', caption: 'Grand Budapest Hotel', date: "2022-09-04",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/video/vi1157933593/?playlistId=tt2278388&ref_=tt_pr_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersHT22/GBU.jpg', caption: 'The Good. the Bad and the Ugly', date: "2022-09-18",text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/video/vi3416964889/?playlistId=tt0060196&ref_=tt_pr_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersHT22/paradiso.png', caption: 'Cinema Paradiso', date: "2022-10-02",text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/video/vi2800655897/?playlistId=tt0095765&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersHT22/ED.jpg', caption: 'Ed Wood', date: "2022-10-16",text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/video/vi2695102745/?playlistId=tt0109707&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersHT22/clockworkorange.png', caption: 'A Clockwork Orange', date: "2022-10-30",text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/video/vi4030506521/?playlistId=tt0066921&ref_=tt_pr_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersHT22/TS.jpeg', caption: 'Trainspotting', date: "2022-11-13",text: translate("BeskrivFilm6"), vidID :"https://www.imdb.com/video/vi2148899865/?playlistId=tt0117951&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersHT22/medlemmarnas.png', caption: 'Medlemmarnas val', date: "2022-11-27",text: translate("BeskrivFilm7"), vidID :""},
      {src: 'https://api.stubinen.org/img/postersHT22/Django.png', caption: 'Django Unchained', date: "2022-12-11",text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/video/vi2291574553/?playlistId=tt1853728&ref_=tt_pr_ov_vi"},
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
