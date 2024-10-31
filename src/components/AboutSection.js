import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';
import {translate} from '../services/Local';

class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/styrelsen2425/Samuel.jpg', name: 'Samuel',roll: translate("Ordförande")},
          { src: 'https://api.stubinen.org/img/styrelsen2425/Yehya.jpg', name: 'Yehya',roll: translate("Kassör")},
          { src: 'https://api.stubinen.org/img/styrelsen2425/Ada.jpg', name: 'Ada',roll: translate("Filmansvarig")},
          { src: 'https://api.stubinen.org/img/styrelsen2425/Natalie.jpg', name: 'Natalie',roll: translate("Marknadsföring")},
          { src: 'https://api.stubinen.org/img/styrelsen2425/Axel.jpg', name: 'Axel',roll: translate("Marknadsföring")},
          { src: 'https://api.stubinen.org/img/styrelsen2425/Chloe.jpg', name: 'Chloe',roll: translate("Eventansvarig")},
          { src: 'https://api.stubinen.org/img/styrelsen2425/Ludwig.jpg', name: 'Ludwig',roll: translate("Webbansvarig")}
      ];
    }
    render() {
        const listItems = this.IMAGES.map((Obj) =>
            <StyrelseMedlem
                image={Obj.src}
                name = {Obj.name}
                role = {Obj.roll}
            />
        );

        return (
          <div className='AboutSection'>
          <Container>
            <h2>{translate("Styrelsen")} 24/25</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection
