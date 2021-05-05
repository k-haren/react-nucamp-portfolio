import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CardColumns from "react-bootstrap/CardColumns";

function About() {
  return (
    <div>
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

{/* Nutcracker card  */}
      <CardColumns>
        <Card>
          <Card.Img variant="top" src="images/nutcracker.jpg" />
          <Card.Body>
            <Card.Title>Nutcracker</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Card.Text>
          </Card.Body>
        </Card>

{/* Blockquote */}
        <Card className="p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Nutcracker Review "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur."
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>

{/* Harriet Card */}
        <Card>
          <Card.Img variant="top" src="images/harriet.jpeg" />
          <Card.Body>
            <Card.Title>Harriett: The Black Swan</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>

    {/* Blockquote  */}
        <Card bg="secondary" text="white" className="text-center p-3">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              Harriet Review ...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
{/* Additional cards if needed */}
        {/* <Card className="text-center">
          <Card.Body>
            <Card.Title>which one is this???</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card> */}

        <Card>
          <Card.Img src="images/spanish-steps.jpg" />
        </Card>
{/* Additional cards if needed */}
        {/* <Card className="text-right">
          <blockquote className="blockquote mb-0 card-body">
            <p>
              TEsting 2-----Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <footer className="blockquote-footer">
              <small className="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card> */}

        {/* Nior */}
        <Card>
          <Card.Img variant="top" src="images/white-4.jpg" />
          <Card.Body>
            <Card.Title>Nior</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Card.Text>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </div>
  );
}

export default About;
