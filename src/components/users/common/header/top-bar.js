import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import ContactBar from './contact-bar'
import SocialBar from './social-bar'
import "./top-bar.css";

const TopBar = () => {
  return (
    <div className="topbar">
        <Container>
            <Row>
                <Col><SocialBar/></Col>
                <Col><ContactBar/></Col>
            </Row>

        </Container>
    </div>
  )
}

export default TopBar