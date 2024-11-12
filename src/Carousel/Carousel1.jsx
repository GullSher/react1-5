import React from 'react';
import { Carousel } from 'react-bootstrap';
import cycle from '../AssetsMain/Img/whImages/png-2757379_1920.png';
import biscuit1 from '../AssetsMain/Img/whImages/green-biscuits.jpg';
import woodsect1 from '../AssetsMain/Img/whImages/woodsect.jpg';

function Carousel1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={cycle} className="d-block w-100" alt="Cycle" />
        <Carousel.Caption>
          <h5>First Slide Label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src={woodsect1} className="d-block w-100" alt="Wood Section" />
        <Carousel.Caption>
          <h5>Second Slide Label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={biscuit1} className="d-block w-100" alt="Biscuits" />
        <Carousel.Caption>
          <h5>Third Slide Label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;
