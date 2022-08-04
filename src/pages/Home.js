import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider from '../assets/images/slider.png'
const Home = () => {
  return (
    <div className='App bg-img'>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-50 img-position"
          src={slider}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 img-position"
          src={slider}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 img-position "
          src={slider}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home