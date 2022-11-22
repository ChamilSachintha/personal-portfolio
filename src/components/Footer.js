import { Col, Container, Row } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <MailchimpForm /> */}
                    {/* <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col> */}
                    <Col sm={7} className="text-center text-sm-end">
                        <div className="footer-social-icon">
                            <a href="https://www.linkedin.com/in/chamilsachintha96" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/ChamilSachintha" target="_blank"><img src={navIcon4} alt="" /></a>
                            <a href="https://www.facebook.com/chamil.sachintha" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/chamil_sachintha/" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved.</p>
                    </Col>  
                </Row>
            </Container>
        </footer>
    )
}