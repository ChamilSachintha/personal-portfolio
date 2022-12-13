import { Container, Row, Tab, Col, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCards/ProjectCard1";
import { ProjectCard2 } from "./ProjectCards/ProjectCard2";
import { ProjectCard3 } from "./ProjectCards/ProjectCard3";
import { ProjectCard4 } from "./ProjectCards/ProjectCard4";
import { ProjectCard5 } from "./ProjectCards/ProjectCard5";
import { ProjectCard6 } from "./ProjectCards/ProjectCard6";

import TrackVisibility from 'react-on-screen';
import CardActionArea from '@mui/material/CardActionArea';

import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

export const Projects = () => {

    const Projects = [
        {
            title1: "Pharmacy Management System",
            description1: "Full-stack application | HTML5, CSS3 & PHP",
            imgUrl1: projImg1,
        },

        {
            title1: "TODO App",
            description1: "Figma UI/UX design for a mobile application",
            imgUrl1: projImg2,
        },

        {
            title2: "Academic Calendar for Universities",
            description2: "Figma UI/UX design for a web application",
            imgUrl2: projImg3,
        },

        {
            title2: "Personal Portfolio Website",
            description2: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl2: projImg4,
        },

        {
            title2: "Student Progress Viewer for Universities",
            description2: "Figma UI/UX design for a web application",
            imgUrl2: projImg5,
        },

        {
            title3: "Student Progress Viewer for Universities",
            description3: "Front-end application | React, React-bootstrap & Animate.css",
            imgUrl3: projImg6,
        },

    ];


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
                                            <div class="proj-container">
                                                <div class="card">
                                                    <div class="face face1">
                                                        <div class="content">
                                                            <div class="icon">
                                                                <img src={projImg1} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="face face2">
                                                        <div class="content">
                                                            <h3>
                                                                <a href="https://www.linkedin.com/in/adamdipinto/" target="_blank">_adamdipinto</a>
                                                            </h3>
                                                            <p>This is where I network and build my professional protfolio.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="face face1">
                                                        <div class="content">
                                                            <div class="icon">
                                                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="face face2">
                                                        <div class="content">
                                                            <h3>
                                                                <a href="https://twitter.com/AdamDipinto" target="_blank">@AdamDipinto</a>
                                                            </h3>
                                                            <p>This is where I read news and network with different social groups.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="face face1">
                                                        <div class="content">
                                                            <div class="icon">
                                                                <i class="fa fa-github-square" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="face face2">
                                                        <div class="content">
                                                            <h3>
                                                                <a href="https://github.com/atom888" target="_blank">atom888</a>
                                                            </h3>
                                                            <p>This is where I share code and work on projects.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </a>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <a href="https://github.com/ChamilSachintha/personal-portfolio" target="_blank">
                                        <div class="cards">
                                            <div class="card">
                                                <img src={projImg2} alt="" />
                                                <p class="card-desc">Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed,.</p>
                                            </div>
                                            <div class="card">
                                                <h2 class="card-title">Lion</h2>
                                                <img src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                                                <p class="card-desc">The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.</p>
                                            </div>
                                            <div class="card">
                                                <h2 class="card-title">Hawk</h2>
                                                <img src="https://images.unsplash.com/photo-1534251369789-5067c8b8602a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="" />
                                                <p class="card-desc">Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size.
                                                    The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="https://github.com/ChamilSachintha/Student-Progress-Viewer" target="_blank">
                                        <Row>
                                            {
                                                Projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard6
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