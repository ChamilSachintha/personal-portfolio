import { Col } from "react-bootstrap"

export const ProjectCard2 = ({ title2, description2, imgUrl2 }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl2} />
                <div className="proj-txtx">
                    <h4>{title2}</h4>
                    <span>{description2}</span>
                </div>
            </div>
        </Col>
    )
}