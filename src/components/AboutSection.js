import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';
import {translate} from '../services/Local';

class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/styrelsen2324/temp.jpg', name: 'Thea',roll: translate("Ordförande")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/temp.jpg', name: 'Kristian',roll: translate("Kassör")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/temp.jpg', name: 'Tobias',roll: translate("Filmansvarig")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/temp.jpg', name: 'Kasper',roll: translate("Marknadsföring")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/temp.jpg', name: 'Victor',roll: translate("Marknadsföring")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/temp.jpg', name: 'Emma',roll: translate("Sekreterare")},
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
            <h2>{translate("Styrelsen")} 22/23</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection
