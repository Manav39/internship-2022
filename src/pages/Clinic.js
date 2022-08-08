import React from "react";
import Image from "../assets/images/about.png";
import "./Clinic.css";

const Clinic = () => {
  return (
    <div className="App">
      <section className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src={Image} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h2 className="custom_heading">
                  About Our Pets
                  <span> Clinic</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since theLorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the
                </p>
                <div>
                  <a href="">About More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clinic;
