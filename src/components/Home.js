import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

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

      <Card className="card-bio">
        <Card.Body>
          <h1>Bio</h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Body>
      </Card>

    </div>
  );
};

export default Home;
