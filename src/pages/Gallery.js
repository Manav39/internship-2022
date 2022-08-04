import React from 'react'
import './gallery.css'
import g1 from '../assets/images/g-1.png';
import g2 from '../assets/images/g-2.png';
import g3 from '../assets/images/g-3.png';
import g4 from '../assets/images/g-4.png';
import g5 from '../assets/images/g-5.png';
const Gallery = () => {
  return (
    <>
    <section className="gallery-section layout_padding">
        <div className="container">
          <h2>
            Our Gallery
          </h2>
        </div>
        <div className="container">
          <div className="img_box box-1">
             <img src={g1} alt=""/>
          </div>
          <div className="img_box box-2">
              <img src={g2} alt=""/>
          </div>
          <div className="img_box box-3">
               <img src={g3} alt=""/>
          </div>
          <div className="img_box box-4">
             <img src={g4} alt=""/>
          </div>
          <div className="img_box box-5">
              <img src={g5} alt=""/>
          </div>
        </div>
      </section>
  
      </>
  )
}

export default Gallery