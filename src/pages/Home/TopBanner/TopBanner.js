import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from '../../../images/slideOne.jpg';
import slideTwo from '../../../images/slideTwo.jpg';
import slideThree from '../../../images/slideThree.png';
import slideFour from '../../../images/slideFour.jpg';
import slideFive from '../../../images/slideFive.jpg';
import './TopBanner.css';


const TopBanner = () => {
    return (
        <div className="top-banner">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideOne}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideTwo}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideThree}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideFour}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideFive}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default TopBanner;