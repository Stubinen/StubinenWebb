import React, { Component } from 'react';
import logo from '../logo.svg';
import LazyHero from 'react-lazy-hero';
import Button from './Button';
import { Link } from 'react-router-dom';


const loginlink = props => <Link to="/login" {...props} />
const registerlink = props => <Link to="/register" {...props} />
class Hero extends Component {

  render() {
    return (
        <LazyHero imageSrc={'https://api.stubinen.org/img/stubinen_alla.jpg'} color="#fff" isFixed={true} opacity={0.2} minHeight='75vh' transitionDuration={1000}>
          <div className='row'>
            <img src={require('../../src/img/logo.png')} />
          </div>
          <Button text='Logga in' link={loginlink}/>
          <Button text='Registrera dig' link={registerlink}/>
        </LazyHero>
    );
  }
}


export default Hero
