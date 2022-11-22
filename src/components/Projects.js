import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards/ProjectCard1";
import { ProjectCard2 } from "./ProjectCards/ProjectCard2";
import { ProjectCard3 } from "./ProjectCards/ProjectCard3";
import { ProjectCard4 } from "./ProjectCards/ProjectCard4";
import { ProjectCard5 } from "./ProjectCards/ProjectCard5";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";

export const Projects = () => {

    const Projects = [
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
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
        },

        {
            title4: "Personal Portfolio Website",
            description4: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl4: projImg4,
        },
        {
            title4: "Personal Portfolio Website",
            description4: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl4: projImg4,
        },
        {
            title4: "Personal Portfolio Website",
            description4: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl4: projImg4,
        },

        {
            title5: "Student Progress Viewer for Universities",
            description5: "Figma UI/UX design for a web application",
            imgUrl5: projImg5,
        },
        {
            title5: "Student Progress Viewer for Universities",
            description5: "Figma UI/UX design for a web application",
            imgUrl5: projImg5,
        },
        {
            title5: "Student Progress Viewer for Universities",
            description5: "Figma UI/UX design for a web application",
            imgUrl5: projImg5,
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
                                    <a href="https://github.com/ChamilSachintha/Pharmacy-Management-System" target="_blank">
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
                                    </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <a href="https://github.com/ChamilSachintha/personal-portfolio" target="_blank">
                                        <Row>
                                            {
                                                Projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard4
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                        <a href="https://www.figma.com/file/08BeH4Xv1yw2M819bzyFzS/Design-1?t=jZK3aOJNwAHjyEXN-1" target="_blank">
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
                                            </Row>
                                        </a>
                                        <a href="https://www.figma.com/file/z43S0OGbQfysKm7UnrVPN7/Untitled?node-id=0%3A1&t=hZ2sHzDIn2XEXvpB-1" target="_blank">
                                            <Row>
                                                {
                                                    Projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard5
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </a>
                                        <a href="https://www.figma.com/file/IPv7RZ6prAhNObLnDxr76Z/UI%2FUX-Design-for-Academic-Calendar?node-id=0%3A1&t=jZK3aOJNwAHjyEXN-1" target="_blank">
                                            <Row>
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
                                        </a>
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