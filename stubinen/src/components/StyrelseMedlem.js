import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/StyrelseMedlem.css';

class StyrelseMedlem extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
        <figure class="snip0057 red hover">
          <figcaption>
            <h2>{this.props.name}</h2>
            <p>{this.props.role}</p>
          </figcaption>
          <div class="image"><img src={this.props.image} alt="sample4"/></div>
        </figure>
    );
  }
}

export default StyrelseMedlem
