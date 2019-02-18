import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';


class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/nyaBilder/august.png', name: 'August',roll: "Ordförande"},
          { src: 'https://api.stubinen.org/img/nyaBilder/ludwig.png', name: 'Ludwig',roll: "Sekreterare"},
          { src: 'https://api.stubinen.org/img/nyaBilder/rasmus.png', name: 'Rasmus',roll: "Kassör"},
          { src: 'https://api.stubinen.org/img/nyaBilder/martin.png', name: 'Marting',roll: "Event"},
          { src: 'https://api.stubinen.org/img/nyaBilder/alice.png', name: 'Alice',roll: "Filmansvarig"},
          { src: 'https://api.stubinen.org/img/nyaBilder/linnea.png', name: 'Linnea',roll: "Marknadsföring Tryck"},
          { src: 'https://api.stubinen.org/img/nyaBilder/ludvig.png', name: 'Ludvig',roll: "Marknadsföring Digital"},
          { src: 'http://api.stubinen.org/img/nyaBilder/david.png', name: 'David',roll: "Webb"},
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
            <h2>Styrelsen 18/19</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection
