import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "2rem" }}>
        <h1>About Us</h1>
        <Row>
          <Col md={6}>
            <img
              className="img1"
              src="https://media.licdn.com/dms/image/C5603AQGlaETVO8Fm4w/profile-displayphoto-shrink_400_400/0/1612333964014?e=1684368000&v=beta&t=dRhz8I7nIIzNt1Mi7spda2zoPgzMuqieX7xGF4CqSEo"
              alt="About Us"
            />
          </Col>
          <Col md={6}>
            <p>
              We are a team of passionate bloggers who love to share our
              thoughts, experiences and ideas with the world. Our mission is to
              inspire and entertain our readers while providing high-quality,
              informative content.
            </p>
            <p>
              Our blog covers a wide range of topics, including technology,
              lifestyle, health, travel and much more. We are constantly
              exploring new and exciting topics to keep our readers engaged and
              informed.
            </p>
            <p>
              Thank you for visiting our blog, and we hope you enjoy reading our
              articles as much as we enjoy writing them!
            </p>
            <p>
              {" "}
              <b style={{ color: "green" }}>
                Check Resume Builder website :)
              </b>{" "}
              <a href="https://loginlogout-3ae55.web.app/">Click Here</a>{" "}
            </p>
            <p>
              {" "}
              <b style={{ color: "orange" }}>
                GoTo my Portfolio Website :)
              </b>{" "}
              <a href="https://lavkush-maurya.github.io/Portfolio/">
                Click Here
              </a>{" "}
            </p>
            <marquee Scrollamount="2" direction="up" height="200px">
              Greetings ! if (employer) yes, I'm always looking for great
              opportunities; else if (want a website) ping me ! lets discuss how
              will I help you; else if (geek) hi, I love to be friends with like
              minded people. Message me, maybe we could help each other. else
              goto:{" "}
              <a href="www.linkedin.com/in/lavkushmaurya04">
                www.linkedin.com/in/lavkushmaurya04
              </a>
              <br />
              <br />
              When I wrote this code, only God and I understood what I was doing
              Now, God only knows If you don't like anything on this website,
              bite me !
              <br />
              <br />
              No copyright issues. Feel free to copy anything and everything
              from this website. If you need any help, ping me !
              <br />
              Cheers, Lavkush Maurya mailto:lavkushmaurya147@gmail.com
            </marquee>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
