import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import ExampleCarouselImage from "./ExampleCarouselImage.jsx";

import image1 from "../../assets/Images/sliderImg1.jpg";
import image2 from "../../assets/Images/sliderImg2.jpg";
// import image3 from "../../assets/Images/sliderImg3.jpg";
import image4 from "../../assets/Images/homeBackground.png";


function UncontrolledExample() {
  return (
    <Carousel  >
      <Carousel.Item>
        <ExampleCarouselImage img={image1} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={image2} />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={image4} />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;