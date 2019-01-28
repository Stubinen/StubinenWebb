import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';


class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'http://81.228.240.169/Stubinen/august.jpg', name: 'August',roll: "Ordförande"},
          { src: 'http://81.228.240.169/Stubinen/ludwig.jpg', name: 'Ludwig',roll: "Sekreterare"},
          { src: 'http://81.228.240.169/Stubinen/rasmus.jpg', name: 'Rasmus',roll: "Kassör"},
          { src: 'http://81.228.240.169/Stubinen/martin.jpg', name: 'Marting',roll: "Event"},
          { src: 'http://81.228.240.169/Stubinen/hannes.jpg', name: 'Alice',roll: "Filmansvarig"},
          { src: 'http://81.228.240.169/Stubinen/linnea.jpg', name: 'Linnea',roll: "Marknadsföring Tryck"},
          { src: 'http://81.228.240.169/Stubinen/index.jpg', name: 'Ludvig',roll: "Marknadsföring Digital"},
          { src: 'http://81.228.240.169/Stubinen/david.jpg', name: 'David',roll: "Webb"},
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
