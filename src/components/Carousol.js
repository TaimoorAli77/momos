import React from 'react';
import ImagesEat from './carouseLImage';
import img1 from '../images/carousel/1.jpg'
import img2 from '../images/carousel/2.jpg'
import img3 from '../images/carousel/3.jpg'
import img4 from '../images/carousel/4.jpg'
import img5 from '../images/carousel/5.jpg'
import img6 from '../images/carousel/6.jpg'
import img7 from '../images/carousel/7.jpg'
import img8 from '../images/carousel/8.jpg'
import img9 from '../images/carousel/9.jpg'
import img10 from '../images/carousel/10.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carousol = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,

    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='container-fluid'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Carousel
              infinite
              autoPlay={true}
              autoPlaySpeed={2000}
              responsive={responsive} id="box-1"  className='carouselOne'>
              <ImagesEat className='deliverooImg' src={img1} alt="Missing Carousel" />
              <ImagesEat src={img2} alt="Missing Carousel" />
              <ImagesEat src={img3} alt="Missing Carousel" />
              <ImagesEat src={img4} alt="Missing Carousel" />
              <ImagesEat src={img5} alt="Missing Carousel" />
              <ImagesEat src={img6} alt="Missing Carousel" />
              <ImagesEat src={img7} alt="Missing Carousel" />
              <ImagesEat src={img8} alt="Missing Carousel" />
              <ImagesEat src={img9} alt="Missing Carousel" />
              <ImagesEat src={img10} alt="Missing Carousel" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousol;
