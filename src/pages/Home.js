import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slider from '../assets/images/slider.png';
import Clinic from './Clinic';
import Service from './Service';
import Buy from './Buy';
import Contact from './Contact';
import Gallery from './Gallery';
const Home = () => {
  return (
    <>
    <div className='App bg-img'>
      <Carousel style={{width : '100%',objectFit : 'cover'}}>
      <Carousel.Item>
       
         <img
          className="d-block w-50 img-position img-fluid"
          src={slider}
          alt="First slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 img-position img-fluid"
          src={slider}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 img-position img-fluid"
          src={slider}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={true}>
        <img
          className="d-block w-50 img-position img-fluid"
          src={slider}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    <Clinic/>
    <Service/>
    <Gallery/>
    <Buy/>
    <Contact/>
    </>
  )
}

export default Home