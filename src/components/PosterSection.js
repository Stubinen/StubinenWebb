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
      {src: 'https://api.stubinen.org/img/postersVT23/TGP.jpg', caption: 'Tokyo Godfathers', date: "2023-01-22",text: translate("BeskrivFilm1"), vidID :"https://www.imdb.com/video/vi867483161/?playlistId=tt0388473?ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersVT23/WPP.jpg', caption: 'The Worst Person in the World', date: "2023-02-05",text: translate("BeskrivFilm2"), vidID :"https://www.imdb.com/video/vi2032321305/?playlistId=tt10370710?ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersVT23/ANP.jpg', caption: 'Apocalypse Now', date: "2023-02-19",text: translate("BeskrivFilm3"), vidID :"https://www.imdb.com/video/vi3543773721/?playlistId=tt0078788?ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersVT23/LMSP.jpg', caption: 'Little Miss Sunshine', date: "2023-03-05",text: translate("BeskrivFilm4"), vidID :"https://www.imdb.com/video/vi3667263769/?playlistId=tt0449059?ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersVT23/JP.jpg', caption: 'The Hunt (Jakten)', date: "2023-04-02",text: translate("BeskrivFilm5"), vidID :"https://www.imdb.com/video/vi2244519449/?playlistId=tt2106476?ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersVT23/MV.png', caption: 'Members Choice', date: "2023-04-30",text: translate("BeskrivFilm6"), vidID :"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"},
      {src: 'https://api.stubinen.org/img/postersVT23/CKP.jpg', caption: 'Citizen Kane', date: "2023-04-16",text: translate("BeskrivFilm7"), vidID :"https://www.imdb.com/video/vi568630553/?playlistId=tt0033467?ref_=ext_shr_lnk"},
      {src: 'https://api.stubinen.org/img/postersVT23/ABP.jpg', caption: 'American Beauty', date: "2023-05-14",text: translate("BeskrivFilm8"), vidID :"https://www.imdb.com/video/vi788506137/?playlistId=tt0169547?ref_=ext_shr_lnk"},
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
