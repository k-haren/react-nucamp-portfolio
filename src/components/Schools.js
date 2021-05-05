import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";


function Schools() {
  return (
    <div>
      <Card className="card-bio">
        <Card.Body>
          <h1>Schools</h1>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Card.Body>
      </Card>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="images/tupac.jpg" />
          <Card.Body>
            <Card.Title>Tacoma Urban Performance Arts Center</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.<hr />
              {"https://tacomaupac.org/"}
              <Card>
          <Card.Img src="images/j'nai.jpg" />
        </Card>
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>

        <Card>
          <Card.Img variant="top" src="images/SDT.png" />
          <Card.Body>
            <Card.Title>Spectrum Dance Theater</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.This card has supporting text below as a natural lead-in to
              additional content.<hr />
              {"https://spectrumdance.org/"}
            </Card.Text>
            <Card>
          <Card.Img src="images/spectrum.jpg" />
        </Card>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>

        <Card>
          <Card.Img className="card-pnb" variant="top" src="images/PNB.png" />
          <Card.Body>
            <Card.Title>Pacific Northwest Ballet</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.his is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
          <Card>
          <Card.Img src="images/j'nai.jpg" />
        </Card>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Schools;
