/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import 'animate.css'
import './style.css'
import IMAGES from '../../configs/images'

export default class Poster extends React.Component {
    render() {
        return (
            <Container id="poster" className="container-poster">
                <Row className="d-flex flex-row-reverse">
                    <Col md="6" className="animated fadeInRight">
                        <img src={IMAGES.poster} alt="" className="img-fluid mb-4" />
                    </Col>
                    <Col md="6" className="poster-poster animated fadeInLeft">
                        <Row>
                            <Col md="10">
                                <p className="title">Why React Ghibli Movie?</p>
                            </Col>
                        </Row>
                        <p className="subtitle">We provide a wide selection of films for you to enjoy with your family. We provide a wide selection of films for you to enjoy with your family. We provide a wide selection of films for you to enjoy with your family.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
