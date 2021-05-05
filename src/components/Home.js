import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/ivy.jpg"
            alt="Slide 1: Placeholder Image of Ivy"
          />
          <Carousel.Caption>
            <h3>Ballet Journey</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/ivy.jpg"
            alt="Slide 1: Placeholder Image of Ivy"
          />

          <Carousel.Caption>
            <h3>Ballet Journey</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/ivy.jpg"
            alt="Slide 1: Placeholder Image of Ivy"
          />
          <Carousel.Caption>
            <h3>Ballet Journey</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
