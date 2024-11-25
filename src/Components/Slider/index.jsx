import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import image1 from "../../assets/Images/sliderImg1.jpg";
import image2 from "../../assets/Images/sliderImg2.jpg";
import image3 from "../../assets/Images/sliderImg3.jpg";


function UncontrolledExample() {
  return (
    <Carousel  >
      <Carousel.Item>
        <Carousel.Caption>
          <img src={image1} className='sliderImg' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <img src={image2} className='sliderImg' />

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <img src={image3} className='sliderImg' />

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;