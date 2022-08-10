import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slider from "../assets/images/slider.png";
import Clinic from "./Clinic";
import Service from "./Service";
import Buy from "./Buy";
import Contact from "./Contact";
import Gallery from "./Gallery";
const Home = () => {
  return (
    <>
      <Carousel style={{ width: "100%", objectFit: "cover" }}>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>Professional</h1>
              <h1>
                <span>Care Your Pet</span>
              </h1>
              <p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </span>
              </p>
              <div className="btn_box">
                <a href="/buy" class="btn-1">
                  Buy now
                </a>
                <a href="/contact" class="btn-2">
                  Contact
                </a>
              </div>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>Professional</h1>
              <h1>
                <span>Care Your Pet</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <a href="/buy" class="btn-1">
                Buy now
              </a>
              <a href="/contact" class="btn-2">
                Contact
              </a>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bg-img">
            <div className="left-portion">
              <h1>Professional</h1>
              <h1>
                <span>Care Your Pet</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <a href="/buy" class="btn-1">
                Buy now
              </a>
              <a href="/contact" class="btn-2">
                Contact
              </a>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={true}>
          <div className="bg-img">
            <div className="left-portion">
              <h1>Professional</h1>
              <h1>
                <span>Care Your Pet</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever
              </p>
              <a href="/buy" class="btn-1">
                Buy now
              </a>
              <a href="/contact" class="btn-2">
                Contact
              </a>
            </div>
            <div className="right-portion">
              <img
                className="d-block  img-position img-fluid"
                src={slider}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Clinic />
      <Service />
      <Gallery />
      <Buy />
      <Contact contactpos='unset'/>
    </>
  );
};

export default Home;
