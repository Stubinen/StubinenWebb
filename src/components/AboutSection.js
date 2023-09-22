import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';
import {translate} from '../services/Local';

class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/styrelsen2324/Thea.jpg', name: 'Thea',roll: translate("Ordförande")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/Kristian.jpg', name: 'Kristian',roll: translate("Kassör")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/Tobias.jpg', name: 'Tobias',roll: translate("Filmansvarig")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/Kasper.jpg', name: 'Kasper',roll: translate("Marknadsföring")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/Victor.jpg', name: 'Victor',roll: translate("Marknadsföring")},
          { src: 'https://api.stubinen.org/img/styrelsen2324/Emma.jpg', name: 'Emma',roll: translate("Sekreterare")},
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
            <h2>{translate("Styrelsen")} 23/24</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection
