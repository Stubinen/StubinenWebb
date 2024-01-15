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
      {src: 'https://api.stubinen.org/img/postersVT24/DAT.jpg', caption: 'The Day After Tomorrow', date: "2024-01-28",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/video/vi2826045209/"},
      {src: 'https://api.stubinen.org/img/postersVT24/DP.jpeg', caption: 'Deadpool', date: "2024-02-11",text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/video/vi567457049/"},
      {src: 'https://api.stubinen.org/img/postersVT24/IBSCT.jpg', caption: 'If Beale Street Could Talk', date: "2024-03-03",text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/video/vi2767108633/"},
      {src: 'https://api.stubinen.org/img/postersVT24/M.jpg', caption: 'Mother', date: "2024-03-24",text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/video/vi3905684505/"},
      {src: 'https://api.stubinen.org/img/postersVT24/A.jpg', caption: 'Alien', date: "2024-04-07",text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/video/vi1497801241/"},
      {src: 'https://api.stubinen.org/img/postersVT24/MV.png', caption: 'Members Choice', date: "2024-04-21",text: translate("BeskrivFilm6"), vidID :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
      {src: 'https://api.stubinen.org/img/postersVT24/MSKP.jpg', caption: 'Min så kallade pappa', date: "2024-05-05",text: translate("BeskrivFilm7"), vidID :"https://www.youtube.com/watch?v=R1Qgga-ThWU"},
      {src: 'https://api.stubinen.org/img/postersVT24/LIT.jpg', caption: 'Lost in Translation', date: "2024-05-19",text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/video/vi26673433/"},
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
