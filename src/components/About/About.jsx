import * as Icons from '@icons-pack/react-simple-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import PortfolioContext from '../../context/context';
import AboutImg from '../Image/AboutImg';
import Title from '../Title/Title';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, cta, resume, skills } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                <p className="d-flex mt-3 about-wrapper__info-cta-links">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    Resume
                  </a>
                </p>
                <p className="d-flex mt-3 about-wrapper__info-cta-links">
                  <Link to="projects--1" smooth duration={1000} className="cta-btn cta-btn--work">
                    <span className="pr-1">{cta}</span>
                    <i className="fas fa-angle-down fa-1x" aria-hidden="true" />
                  </Link>
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="skills-wrapper">
          <Title title="Skills" />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <Col className="skills-wrapper__box">
              {skills &&
                skills.map((skill) => {
                  const { id, name, color } = skill;
                  const components = {
                    Html5: Icons.Html5,
                    Css3: Icons.CssThree,
                    Sass: Icons.Sass,
                    Bootstrap: Icons.Bootstrap,
                    Javascript: Icons.Javascript,
                    ReactJs: Icons.ReactJs,
                    Redux: Icons.Redux,
                    ReactRouter: Icons.Reactrouter,
                    Gatsby: Icons.Gatsby,
                    NodeJS: Icons.NodeDotJs,
                    Express: Icons.Express,
                    NPM: Icons.Npm,
                    Mongodb: Icons.Mongodb,
                    Postgresql: Icons.Postgresql,
                    Postman: Icons.Postman,
                    Git: Icons.Git,
                    Github: Icons.Github,
                    VisualStudioCode: Icons.Visualstudiocode,
                    ApolloGraphQL: Icons.Apollographql,
                    Jest: Icons.Jest,
                    Webpack: Icons.Webpack,
                  };
                  const Icon = components[name];
                  return (
                    <Icon
                      key={id}
                      className="skills-wrapper__icons"
                      color={color}
                      size={68}
                      title={name}
                      aria-label={name}
                    />
                  );
                })}
            </Col>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default About;
