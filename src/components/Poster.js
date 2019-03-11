import React, { Component } from 'react';
import Button from './Button';
import '../styles/Poster.css';
import { Container, Row, Col } from 'reactstrap';
import YouTube from 'react-youtube';
import { FaImdb } from "react-icons/fa";
import {translate} from '../services/Local';

class Poster extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
      e.preventDefault();
      window.open(this.props.IMDB, "_blank");
  }
  render() {
      var MoviePoster = {
          backgroundImage: 'url(' + this.props.poster +')'
      }
    return (
        <div id="movie-card-list">
          <div className="movie-card" style={MoviePoster}>
            <div className="movie-card__overlay"></div>
            <button onClick={this.handleClick} className="movie-btn movie-btn-outline movie-card__button" type="button"><i class="fas fa-play"></i>{translate("Spela Trailer")}</button>
            <div className="movie-card__content">
              <div className="movie-card__header">
                <h1 className="movie-card__title">{this.props.title}</h1>
                <h4 className="movie-card__info">{this.props.date}</h4>
              </div>
              <p className="movie-card__desc">{this.props.text}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Poster
