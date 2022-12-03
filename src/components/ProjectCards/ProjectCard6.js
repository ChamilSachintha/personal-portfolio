import { Col } from "react-bootstrap"

export const ProjectCard6 = ({ title6, description6, imgUrl6 }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl6} />
                <div className="proj-txtx">
                    <h4>{title6}</h4>
                    <span>{description6}</span>
                </div>
            </div>
        </Col>
    )
}