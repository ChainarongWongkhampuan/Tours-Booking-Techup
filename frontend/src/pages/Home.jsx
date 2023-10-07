import React from "react";
import "../styles/home.css";
import { Container, Row, Col, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Img from "../assets/images/img1.webp";
import Img02 from "../assets/images/img2.webp";
import Video from "../assets/images/video1.mp4";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import Slider from "../components/Slider/Slider";

const nav__links3 = [
  {
    path: '/tours',
    display: 'START YOUR ADVENTURE NOW',
  },
]

const Home = () => {
  return (
    <>
    
      <section className="content" >
        <Container>
          <Row>
            <Col lg="3">
              <div className="hero__content">
                <h1>
                  CHIANG MAI
                  CHIANG RAI
                </h1>
                <Col lg="10">
                  <div className="quicklinks_booking">
                    {nav__links3.map((item, index) => (
                      <ListGroupItem key={index} className=" border-0">
                        <Link to={item.path}>{item.display}</Link>
                      </ListGroupItem>
                    ))}
                  </div>
                </Col>
              </div>
            </Col>

            <Col lg="3">
              <div className="img-box">
                <img src={Img} alt="" />
              </div>
            </Col>
            <Col lg="3">
              <div className="img-box video-box ">
                <video src={Video} alt="" controls />
              </div>
            </Col>
            <Col lg="3">
              <div className="img-box ">
                <img src={Img02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="tours">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Slider />
            </Col>
          </Row>
        </Container>
      </section>

    </>
  );
};

export default Home;
