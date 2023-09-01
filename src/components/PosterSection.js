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
      {src: 'https://api.stubinen.org/img/postersHT23/BM.jpg', caption: 'Birdman', date: "2023-09-10",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/video/vi1378069529/?playlistId=tt2562232&ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersHT23/CB.jpg', caption: 'Casablanca', date: "2023-09-24",text: translate("BeskrivFilm2"), vidID :"https://www.youtube.com/watch?v=MF7JH_54d8c"},
      {src: 'https://api.stubinen.org/img/postersHT23/SM.jpg', caption: 'Superman (1978)', date: "2023-10-08",text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/video/vi4168655897/?playlistId=tt0078346&ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersHT23/CKE.jpg', caption: 'Chungking Express', date: "2023-10-15",text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/video/vi594918937/?ref_=ttvi_vi_imdb_1"},
      {src: 'https://api.stubinen.org/img/postersHT23/SOTL.jpg', caption: 'The Silence of the Lambs', date: "2023-10-29",text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/video/vi3377380121/?playlistId=tt0102926&ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersHT23/MV.png', caption: 'Members Choice', date: "2023-11-26",text: translate("BeskrivFilm6"), vidID :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
      {src: 'https://api.stubinen.org/img/postersHT23/BH.jpg', caption: 'Boyhood', date: "2023-12-03",text: translate("BeskrivFilm7"), vidID :"https://www.imdb.com/video/vi1306504217/?playlistId=tt1065073&ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersHT23/DS.jpg', caption: 'Dr. Strangelove', date: "2023-12-10",text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/video/vi3034955545/?ref_=ext_shr_lnk"},
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
