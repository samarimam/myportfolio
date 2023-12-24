import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/uprofile.jpeg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Samar Imam,</strong>
                A passionate programmer born and brought up in India.
                <br />
                I am a seasoned software developer with over one year of
                hands-on experience in the field. I have a genuine passion for
                learning and always enjoy diving into new technologies.
                <br />I thrive on staying updated with the latest industry
                trends, making continuous learning a key part of my professional
                ethos.
                <br /> Eager to contribute my skills and enthusiasm to any
                project, I'm excited about the future and the opportunities for
                growth in the dynamic world of software development.
                {/* <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://auth.geeksforgeeks.org/user/sasuke_uchihaa/profile" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        Geeks for Geeks
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/samarimam" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/samar-imam-7922211b7/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div> */}
                {/* </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
