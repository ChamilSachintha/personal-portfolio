import { Col } from "react-bootstrap"

export const ProjectCard5 = ({ title5, description5, imgUrl5 }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl5} />
                <div className="proj-txtx">
                    <h4>{title5}</h4>
                    <span>{description5}</span>
                </div>
            </div>
        </Col>
    )
}