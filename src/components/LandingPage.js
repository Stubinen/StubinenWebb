import React, { Component } from 'react';
import logo from '../logo.svg';
import LazyHero from 'react-lazy-hero';
import '../styles/LandingPage.css';
import Button from './Button';
import Hero from './Hero';
import PosterSection from './PosterSection';
import AboutSection from './AboutSection';
import { Link } from 'react-router-dom';


const loginlink = props => <Link to="/login" {...props} />
const registerlink = props => <Link to="/register" {...props} />
class LandingPage extends Component {

  render() {
    return (
      <div className="LandingPage">
        <Hero />
        <PosterSection />
        <AboutSection />
      </div>
    );
  }
}


export default LandingPage
