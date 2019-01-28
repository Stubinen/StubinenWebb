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
      { src: 'http://81.228.240.169/Stubinen/IsleOfDogs.png', caption: 'Isle of Dogs',date: "2018-12-16",text:"Det har brutit ut en influensa i Japan som leder till att alla hundar förvisas till en ö av sopor. En pojke reser till ön för att försöka hitta sin förlorade hund.",vidID :"EwdCIpbTN5g"},
      { src: 'http://81.228.240.169/Stubinen/Spotlight_poster.png', caption: 'Spotlight',date: "2018-09-16",text:"Baserad på en sann historia när ett team journalister på The Boston Globe får nys om sanningen om vad som händer bakom stängda dörrar i den katolska kyrkan.",vidID :"EwdCIpbTN5g"},
      { src: 'http://81.228.240.169/Stubinen/Sameblod_A1.png', caption: 'Sameblod',date: "2018-09-30",text:"Den samiska flickan Elle Marja försöker starta ett nytt liv efter mobbing på hennes internatskola, men för att göra det måste hon bryta banden med sin familj.",vidID :"EwdCIpbTN5g"},
      { src: 'http://81.228.240.169/Stubinen/2001_poster.png', caption: '2001: A Space Odyssey', date: "2018-10-14" ,text:"I Stanley Kubricks ikoniska rymdfilm får vi följa mänskligheten ge sig ut på en resa, när spår av något mystiskt och främmande upptäcks på månen.",vidID :"EwdCIpbTN5g"},
      { src: 'http://81.228.240.169/Stubinen/The-Fall.png', caption: 'The Fall' ,date: "2018-10-28",text:"På ett sjukhus i 1920-talets Los Angeles berättar en skadad man fantastiska berättelser om hjältar för en lite flicka. Deras band blir starkare när gränsen mellan saga och verklighet suddas ut.",vidID :"EwdCIpbTN5g"},
      { src: 'http://81.228.240.169/Stubinen/MUSTANG.png', caption: 'Mustang',date: "2018-11-11",text:"Fem föräldralösa flickor står inför en stor förändring när deras vårdnadshavare bestämmer sig för att gifta bort dem.",vidID :"EwdCIpbTN5g"},
      { src: 'http://81.228.240.169/Stubinen/Vertigo_A1.png', caption: 'Vertigo',date: "2018-11-25",text:"Detektiven Fergusson som förälskar sig u en vacker kvinna, medan han kämpar med sina inre demoner. En svindlande klassiker av ingen mindre än Alfred Hitchcock.",vidID :"EwdCIpbTN5g"},
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
            IMDB = "http://www.imdb.com"
          />
      );
      const notShownItems = this.NOTSHOWN.map((Obj) =>
          <Poster
            title={Obj.caption}
            text ={Obj.text}
            date = {Obj.date}
            poster={Obj.src}
            IMDB = "http://www.imdb.com"
          />
      );
    return (
      <div className='PosterSection'>
            {notShownItems}
            <h1> Redan visade filmer denna termin</h1>
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
