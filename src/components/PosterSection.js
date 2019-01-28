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

class PosterSection extends Component {
  constructor(props) {
    super(props);
    this.state={
      lightboxIsOpen: false,
    }
    this.IMAGES = [
      { src: 'https://api.stubinen.org/img/LadyBird.png', caption: 'Lady Bird',date: "2019-02-03",text:"År 2002 växer det upp en konstnärligt lagd sjuttonårig tjej i Sacramento, Kalifornien.",vidID :"https://www.imdb.com/title/tt4925292/videoplayer/vi317437977?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/DonnieDarko.png', caption: 'Donnie Darko',date: "2019-02-17",text:"Donnie har visioner av en man i kanindräkt vid namn Frank som säger att världen kommer att gå under om 28 dagar, 6 timmar, 42 minuter och 12 sekunder. Tills dess har Donnie ett uppdrag.",vidID :"https://www.imdb.com/title/tt0246578/videoplayer/vi1835513369?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/billboards.png', caption: 'Three Billboards Outside Ebbing Missouri',date: "2019-03-03",text:"När Mildreds dotter blir mördad längs en väg i Missouri tar hon bokstavligt talat upp en kamp mot myndigheterna som inte lyckats hitta mördaren.",vidID :"https://www.imdb.com/title/tt5027774/videoplayer/vi3585980441?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/12AngryMen.png', caption: '12 Angry Men', date: "2019-03-24" ,text:"En jury försöker komma till beslut om en tillsynes solklar fällande dom, när en jurymedlem sätter sig emot, något som kickar igång en helt nny utredning.",vidID :"https://www.imdb.com/title/tt0050083/videoplayer/vi3452609817?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/elle.png', caption: 'Elle' ,date: "2019-04-07",text:"Efter att Michelle har blivit överfallen i sitt hem tar hon upp jakten på sin förövare på egen hand, något som rör upp relationerna både hennes privata liv och på hennes arbetsplats.",vidID :"https://www.imdb.com/title/tt3716530/videoplayer/vi3951409689?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/deer.png', caption: 'The Killing of a Sacred Deer',date: "2019-04-28",text:"En karismatisk kirurg tvingas göra en stor uppoffring när den unga killen han tar hand om börjar visa ett skadligt beteende.",vidID :"https://www.imdb.com/title/tt5715874/videoplayer/vi1950595097?ref_=tt_ov_vi"},
      { src: 'https://api.stubinen.org/img/blood.png', caption: 'There Will Be Blood',date: "2019-05-26",text:"I den tidiga eran för oljeindustrin följer vi en historia om religion, familj, hat och storhetsvansinne.",vidID :"https://www.imdb.com/title/tt0469494/videoplayer/vi1341980953?ref_=tt_ov_vi"},
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
            {shownItems.length != 0 ?'<h1> Redan visade filmer denna termin</h1>': ''}
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
