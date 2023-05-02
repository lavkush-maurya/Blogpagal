import React, { Fragment } from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";

const Main = () => {
  return (
    <Fragment>
      <Container style={{marginTop:"3rem"}}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placeimg.com/1920/1080/nature"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome to our Blog</h3>
              <p>Stay up-to-date with the latest news, trends and insights.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placeimg.com/1920/1080/tech"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Discover new ideas</h3>
              <p>
                Explore our diverse range of topics and find inspiration for
                your next project.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className="mt-5">
          <Col md={8}>
            <Card>
              <Card.Img
                variant="top"
                src="https://placeimg.com/640/480/animals"
              />
              <Card.Body>
                <Card.Title>Blog Post Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod sapien nec nulla consectetur lobortis. Nam non mauris
                  nibh. Nullam lobortis eleifend quam at bibendum. Vivamus
                  luctus lorem eu dolor bibendum eleifend.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://placeimg.com/640/480/arch" />
              <Card.Body>
                <Card.Title>Blog Post Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Img variant="top" src="https://placeimg.com/640/480/tech" />
              <Card.Body>
                <Card.Title>Blog Post Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Main;
