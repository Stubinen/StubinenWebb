import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';


class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/august.jpg', name: 'August',roll: "Ordförande"},
          { src: 'https://api.stubinen.org/img/ludwig.jpg', name: 'Ludwig',roll: "Sekreterare"},
          { src: 'https://api.stubinen.org/img/rasmus.jpg', name: 'Rasmus',roll: "Kassör"},
          { src: 'https://api.stubinen.org/img/martin.jpg', name: 'Marting',roll: "Event"},
          { src: 'https://api.stubinen.org/img/alice.jpg', name: 'Alice',roll: "Filmansvarig"},
          { src: 'https://api.stubinen.org/img/linnea.jpg', name: 'Linnea',roll: "Marknadsföring Tryck"},
          { src: 'https://api.stubinen.org/img/ludvig.jpg', name: 'Ludvig',roll: "Marknadsföring Digital"},
          { src: 'https://api.stubinen.org/img/david.jpg', name: 'David',roll: "Webb"},
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
