import React, { Component } from 'react';
import '../styles/AboutSection.css';
import StyrelseMedlem from './StyrelseMedlem';
import { Container, Row, Col } from 'reactstrap';
import {translate} from '../services/Local';

class AboutSection extends Component {
    constructor(props) {
      super(props);
        this.IMAGES = [
          { src: 'https://api.stubinen.org/img/styrelsen2021/fredrik.jpg', name: 'Fredrik',roll: translate("Webb")},
          { src: 'https://api.stubinen.org/img/styrelsen2021/levi.jpg', name: 'Levi',roll: translate("Kassör")},
          { src: 'https://api.stubinen.org/img/styrelsen2021/ludvig.jpg', name: 'Ludvig',roll: translate("Webb")},
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
            <h2>{translate("Styrelsen")} 20/21</h2>
                <Row form ={true}>
                    {listItems}
                </Row>
            </Container>
          </div>
        );
    }
}


export default AboutSection
