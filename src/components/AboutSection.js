import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';
import {translate} from '../services/Local';

class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/styrelsen1920/Elida.png', name: 'Elida',roll: translate("Ordförande")},
          { src: 'https://api.stubinen.org/img/styrelsen1920/Astrid.png', name: 'Astrid',roll: translate("Sekreterare")},
          { src: 'https://api.stubinen.org/img/styrelsen1920/Simon.png', name: 'Simon',roll: translate("Kassör")},
          { src: 'https://api.stubinen.org/img/styrelsen1920/Rebecka.png', name: 'Rebecka',roll: translate("Event")},
          { src: 'https://api.stubinen.org/img/styrelsen1920/saknas.jpg', name: 'Dasmit',roll: translate("Filmansvarig")},
          { src: 'https://api.stubinen.org/img/styrelsen1920/Johanna.png', name: 'Johanna',roll: translate("Marknadsföring")},
          { src: 'http://api.stubinen.org/img/styrelsen1920/Matilda.png', name: 'Matilda',roll: translate("Webb")},
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
            <h2>{translate("Styrelsen")} 19/20</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection


{/*src: 'https://api.stubinen.org/img/nyaBilder/linnea.png', name: 'Klara',roll: translate("Marknadsföring Tryck")*/}