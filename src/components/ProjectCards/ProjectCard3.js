import { Col } from "react-bootstrap"

export const ProjectCard3 = ({ title3, description3, imgUrl3 }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl3} />
                <div className="proj-txtx">
                    <h4>{title3}</h4>
                    <span>{description3}</span>
                </div>
            </div>
        </Col>
    )
}