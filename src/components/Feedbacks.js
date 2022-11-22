import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bg from "../assets/img/feedback-bg.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Card from 'react-bootstrap/Card';
import Flag from 'react-flagpack';
import fiverr from "../assets/img/Fiverr-Logo.png";

export const Feedbacks = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="feedback" id="feedbacks">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                    <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Feedback</h2>
                        </div> }
                        </TrackVisibility>
                        <p>“Always give people more than what they expect to get.”</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div>
                                <Card className="bg-dark text-white">
                                    {/* <Card.Img src={bg} alt="Card image" /> */}
                                        <Card.ImgOverlay>
                                            <a href="https://www.fiverr.com/share/V3wmAV" target="_blank">
                                            <Card.Title>cannoneye</Card.Title>
                                            <h6><span class="au au-gr"></span>Australia&nbsp;
                                            <Flag
                                            code="AU"
                                            gradient="real-linear"
                                            size="m"
                                            hasDropShadow
                                            /></h6>
                                            <Card.Text>
                                            "He delivered better than I expected. reasonable price. fast and easy communication. highly recommended."
                                            </Card.Text>
                                            </a>
                                        </Card.ImgOverlay>
                                </Card>
                            </div>
                            <div>
                            <Card className="bg-dark text-white">
                                    {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                                        <Card.ImgOverlay>
                                        <a href="https://www.fiverr.com/share/V3wmAV" target="_blank">
                                            <Card.Title>familiaoffice</Card.Title>
                                            <h6>Japan&nbsp;
                                            <Flag
                                            code="JP"
                                            gradient="real-linear"
                                            size="m"
                                            hasDropShadow
                                            />
                                            </h6>
                                            <Card.Text>
                                            "Great communication and took all my revisions and changed them to exactly what if asked for!"
                                            </Card.Text>
                                            </a>
                                        </Card.ImgOverlay>
                                </Card>
                            </div>
                            <div>
                                {/* <img src={meter2} alt="Image" /> */}
                                <Card className="bg-dark text-white">
                                    {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                                        <Card.ImgOverlay>
                                        <a href="https://www.fiverr.com/share/V3wmAV" target="_blank">
                                            <Card.Title>vasile96</Card.Title>
                                            <h6>United Kingdom&nbsp;
                                            <Flag
                                            code="GB-UKM"
                                            gradient="real-linear"
                                            size="m"
                                            hasDropShadow
                                            />
                                            </h6>
                                            <Card.Text>
                                            "The best guy that I worked with! Superfast! Highly recommended!"
                                            </Card.Text>
                                            </a>
                                        </Card.ImgOverlay>
                                </Card>
                            </div>
                            <div>
                            <Card className="bg-dark text-white">
                                    {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                                        <Card.ImgOverlay>
                                        <a href="https://www.fiverr.com/share/WDwdWl" target="_blank">
                                            <Card.Title>sergiosombrao</Card.Title>
                                            <h6>Brazil&nbsp;
                                            <Flag
                                            code="BR"
                                            gradient="real-linear"
                                            size="m"
                                            hasDropShadow
                                            />
                                            </h6>
                                            <Card.Text>
                                                "Very good and fast job 5star"
                                            </Card.Text>
                                            </a>
                                        </Card.ImgOverlay>
                                </Card>
                            </div>
                            <div>
                            <Card className="bg-dark text-white">
                                    {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                                        <Card.ImgOverlay>
                                            <a href="https://www.fiverr.com/share/WDwdWl" target="_blank">
                                            <Card.Title>hussain629</Card.Title>
                                            <h6>Hong Kong&nbsp;
                                            <Flag
                                            code="HK"
                                            gradient="real-linear"
                                            size="m"
                                            hasDropShadow
                                            />
                                            </h6>
                                            <Card.Text>
                                                "good and fast work bro delivery on time thank you so much"
                                            </Card.Text>
                                            </a>
                                        </Card.ImgOverlay>
                                </Card>
                            </div>
                            <div>
                            <Card className="bg-dark text-white">
                                    {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
                                        <Card.ImgOverlay>
                                        <a href="https://www.fiverr.com/share/V3wmAV" target="_blank">
                                            <Card.Title>familiaoffice</Card.Title>
                                            <h6>Japan&nbsp;
                                            <Flag
                                            code="JP"
                                            gradient="real-linear"
                                            size="m"
                                            hasDropShadow
                                            /></h6>
                                            <Card.Text>
                                                "Perfect work as always! Trustable person!"
                                            </Card.Text>
                                            </a>
                                        </Card.ImgOverlay>
                                </Card>
                            </div>
                            <div className="item">
                                <a href="https://www.fiverr.com/chamil_s" target="_blank">
                                <img src={fiverr} alt="Image" />
                                <h5>Show more feedback</h5>
                                <h5>in Fiverr</h5>
                                </a>
                            </div >
                        </Carousel >
                    </div >
                    </Col >
                </Row >
            </Container >
    <img className="background-image-left" src={colorSharp} alt="Image" />
        </section >
      )
}