import BaseLayout from "@/components/layouts/BaseLayout";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import { Container, Row, Col } from "reactstrap";
//import Typed from 'react-typed'

const roles = [
  "Developer",700,
  "Software Engineer",700,
  "Java Developer",700,
  "Spring boot",700,
  "React JS",700,
];
class Index extends React.Component {
  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Kunakorn Thongrattana. Get
                    informed, collaborate and discover projects I was working on
                    through the years!
                  </h1>
                </div>
                <TypeAnimation
                  sequence={roles}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className="self-typed"
                />
                {/* <Typed
                  loop 
                  typeSpeed={70}
                  backSpeed={70}
                  strings={roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                  /> */}
                <div className="hero-welcome-bio">
                  <h1>Let's take a look on my work.</h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
