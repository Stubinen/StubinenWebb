import React, { Component } from 'react';
import logo from '../logo.svg';
import LazyHero from 'react-lazy-hero';
import Button from './Button';
import { Link } from 'react-router-dom';
import {translate} from '../services/Local';

const loginlink = props => <Link to="/login" {...props} />
const registerlink = props => <Link to="/register" {...props} />
class Hero extends Component {

  render() {
    return (
        <LazyHero imageSrc={'https://api.stubinen.org/img/styrelsen1920/tempGroup.png'} color="#fff" isFixed={true} opacity={0.2} minHeight='75vh' transitionDuration={1000}>
          <div className='row'>
            <img src={require('../../src/img/logo.png')} />
          </div>
          <Button text={translate("Logga in")} link={loginlink}/>
          <Button text={translate("Registrera")} link={registerlink}/>
        </LazyHero>
    );
  }
}

export default Hero
