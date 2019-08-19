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
      { src: '', caption: 'The Shining',date: "2019-09-15",text:"Jack Torrance, hans hustru Wendy och lille son Danny flyttar in i ett övergivet hotell i bergiga Colorado för att under vintern sköta om det, men hotellet har en tragisk historia som plötsligt verkar vara på väg att upprepa sig.",vidID :"https://www.imdb.com/title/tt0081505/videoplayer/vi1476002073?ref_=tt_ov_vi"},
      { src: '', caption: 'Leave No Trace',date: "2019-09-29",text:"En far och hans trettonåriga dotter lever en idealisk existens i en stor stadspark i Portland, Oregon, när ett litet misstag förändrar deras liv för evigt.",vidID :"https://www.imdb.com/title/tt3892172/videoplayer/vi1901508633?ref_=tt_ov_vi"},
      { src: '', caption: '500 Days of Summer',date: "2019-10-13",text:"När hans flickvän gör slut börjar den hopplösa romantikern Tim gå igenom året de tillbringat tillsammans.",vidID :"https://www.imdb.com/title/tt1022603/videoplayer/vi2234581785?ref_=tt_ov_vi"},
      { src: '', caption: 'Do the Right Thing', date: "2019-10-27" ,text:"Det är en mycket varm dag i kvarteret Bedford-Stuyvesant i Brooklyn och en dispyt på Sals Famous Pizzeria leder till en situation som urartar.",vidID :"https://www.imdb.com/title/tt0097216/videoplayer/vi3282174233?ref_=tt_ov_vi"},
      { src: '', caption: 'The Voices' ,date: "2019-11-10",text:"Jerry är en positiv fabriksarbetare som är svårt psykiskt sjuk och lever i en värld där hans katt och hund kan prata. När han av misstag begår ett mord försöker katten övertala honom om att bli seriemördare medan hunden argumenterar emot.",vidID :"https://www.imdb.com/title/tt1567437/videoplayer/vi1174318617?ref_=tt_ov_vi"},
      { src: '', caption: 'Arrival',date: "2019-11-24",text:"En språkforskare samarbetar med militären för att kommunicera med främmande livsformer efter att tolv mystiska rymdskepp dyker upp runt om i världen.",vidID :"https://www.imdb.com/title/tt2543164/videoplayer/vi4225807897?ref_=tt_ov_vi"},
      { src: '', caption: 'Mean Girls',date: "2019-12-15",text:"Cady Heron flyttar från Afrika till USA för att upptäcka att det finns en hel uppsättning regler för hur man beter sig bland skolkamraterna i high school.",vidID :"https://www.imdb.com/title/tt0377092/videoplayer/vi3868524825?ref_=tt_ov_vi"},
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
