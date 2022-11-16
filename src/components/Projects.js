import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards/ProjectCard1";
import { ProjectCard2 } from "./ProjectCards/ProjectCard2";
import { ProjectCard3 } from "./ProjectCards/ProjectCard3";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const Projects = [
        {
            title1: "Pharmacy Management System",
            description1: "A database management system by using HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title1: "Pharmacy Management System",
            description1: "A database management system by using HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title1: "Pharmacy Management System",
            description1: "A database management system by using HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title2: "TODO App",
            description2: "Figma UI/UX design for a mobile application",
            imgUrl2: projImg2,
        },
        {
            title2: "TODO App",
            description2: "Figma UI/UX design for a mobile application",
            imgUrl2: projImg2,
        },
        {
            title2: "TODO App",
            description2: "Figma UI/UX design for a mobile application",
            imgUrl2: projImg2,
        },

        {
            title3: "Academic Calendar for Universities",
            description3: "Figma UI/UX design for a web application",
            imgUrl3: projImg3,
        },
        {
            title3: "Academic Calendar for Universities",
            description3: "Figma UI/UX design for a web application",
            imgUrl3: projImg3,
        },
        {
            title3: "Academic Calendar for Universities",
            description3: "Figma UI/UX design for a web application",
            imgUrl3: projImg3,
        }

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <h2>Projects</h2>
                        </div>}
                        </TrackVisibility>
                        <p>“Every project is an opportunity to learn, figure out problems and challenges, and invent and reinvent.”</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Front-End</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">UI/UX</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            Projects.map((project, index) => {
                                                return (
                                                    <ProjectCard1
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row class>
                                        This section will update soon!
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            Projects.map((project, index) => {
                                                return (
                                                    <ProjectCard2
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        {
                                            Projects.map((project, index) => {
                                                return (
                                                    <ProjectCard3
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}