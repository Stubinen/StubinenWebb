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
      {src: 'https://api.stubinen.org/img/postersHT20/prisoners.png', caption: 'hejhejfilmen', date: "2022-01-23",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/video/vi3294275865?playlistId=tt1392214&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersVT22/melancholia_a1-1.png', caption: 'Melancholia', date: "2022-02-20",text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/video/vi3294275865?playlistId=tt1392214&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersVT22/barry.png', caption: 'Barry Lyndon', date: "2022-02-06",text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/video/vi3294275865?playlistId=tt1392214&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersVT22/minari.png', caption: 'Minari', date: "2022-03-06",text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/video/vi3294275865?playlistId=tt1392214&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersVT22/rain2.png', caption: 'Singing in the rain', date: "2022-03-27",text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/video/vi3294275865?playlistId=tt1392214&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/postersVT22/firelady.png', caption: 'Portrait of a lady on fire', date: "2022-04-10",text: translate("BeskrivFilm6"), vidID :"https://www.imdb.com/video/vi3294275865?playlistId=tt1392214&ref_=tt_ov_vi"},
      {src: 'https://api.stubinen.org/img/LadyBird.png', caption: 'Medlemmarnas val', date: "2022-04-24",text: translate("BeskrivFilm7"), vidID :""},
      {src: 'https://api.stubinen.org/img/postersHT20/memoriesofmurder.png', caption: 'Memories of murder', date: "2022-05-08",text: translate("BeskrivFilm8"), vidID :""},
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
