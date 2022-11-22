import { Col } from "react-bootstrap"

export const ProjectCard4 = ({ title4, description4, imgUrl4 }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl4} />
                <div className="proj-txtx">
                    <h4>{title4}</h4>
                    <span>{description4}</span>
                </div>
            </div>
        </Col>
    )
}