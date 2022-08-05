import React from 'react'
import Image1 from "../assets/images/location-white.png"
import Image2 from "../assets/images/telephone-white.png"
import Image3 from "../assets/images/envelope-white.png"
import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">

      <section className="Info_section">
        <div className="container">
          <div className="Info_items">
            <a href="">
              <div className="item ">
                <div className="Image-Box box-1">
                  <img src={Image1} />
                </div>
                <div className="Detail-Box">
                  <p>
                    Location
                  </p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="item ">
                <div className="Image-Box box-2">
                  <img src={Image2} />
                </div>
                <div className="Detail-Box">
                  <p>
                    +91 99999999999
                  </p>
                </div>
              </div>
            </a>
            <a href="">
              <div className="item ">
                <div className="Image-Box box-3">
                  <img src={Image3} />
                </div>
                <div className="Detail-Box">
                  <p>
                    demo@gmail.com
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="Copyright_class">
        <p>
          &copy; 2022 All Rights Reserved By
          <a href="https://sahutechnologies.com/"> Sahu technologies</a>
        </p>
      </section>
    </div>
  )
}

export default Footer