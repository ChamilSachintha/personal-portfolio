import { Col } from "react-bootstrap"
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';



export const ProjectCard4 = ({ title4, description4, imgUrl4 }) => {
    return (
        <Col sm={6} md={4}>

        <Card sx={{ maxWidth: 345 }}>
            
                <div className="proj-imgbx">
                    <img src={imgUrl4} />
                    <div className="proj-txtx">
                        <h4>{title4}</h4>
                        <span>{description4}</span>
                    </div>
                </div>
        </Card>
        </Col>

    )
}