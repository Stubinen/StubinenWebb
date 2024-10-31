import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import Button from './Button';
import { Link } from 'react-router-dom';
import {translate} from '../services/Local';

const loginlink = props => <Link to="/login" {...props} />
const registerlink = props => <Link to="/register" {...props} />
class Hero extends Component {

  render() {
    return (
        <LazyHero imageSrc={'https://api.stubinen.org/img/styrelsen2425/gruppbild.jpg'} color="#fff" isFixed={true} opacity={0.01} minHeight='75vh' transitionDuration={1000} alt="Stubinenes styrelse">
          <div className='row'>
            <img src={require('../../src/img/Logostubinen.png')} style={{marginTop:150}}/>
          </div>
          <Button text={translate("Logga in")} link={loginlink}/>
          <Button text={translate("Registrera")} link={registerlink}/>
        </LazyHero>
    );
  }
}

export default Hero
