import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';
import {translate} from '../services/Local';

class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/nyaBilder/august.png', name: 'August',roll: translate("Ordförande")},
          { src: 'https://api.stubinen.org/img/nyaBilder/ludwig.png', name: 'Ludwig',roll: translate("Sekreterare")},
          { src: 'https://api.stubinen.org/img/nyaBilder/rasmus.png', name: 'Rasmus',roll: translate("Kassör")},
          { src: 'https://api.stubinen.org/img/nyaBilder/martin.png', name: 'Marting',roll: translate("Event")},
          { src: 'https://api.stubinen.org/img/nyaBilder/alice.png', name: 'Alice',roll: translate("Filmansvarig")},
          { src: 'https://api.stubinen.org/img/nyaBilder/linnea.png', name: 'Linnea',roll: translate("Marknadsföring Tryck")},
          { src: 'https://api.stubinen.org/img/nyaBilder/ludvig.png', name: 'Ludvig',roll: translate("Marknadsföring Digital")},
          { src: 'http://api.stubinen.org/img/nyaBilder/david.png', name: 'David',roll: translate("Webb")},
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
            <h2>{translate("Styrelsen")} 18/19</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection
