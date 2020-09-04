/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { animateScroll as scroll, scroller } from 'react-scroll'

import './style.css'
import Button from '../../components/button'

export default class HeaderLandings extends React.Component {
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 750,
            delay: 0,
            smooth: 'easeInOutQuad'
        })
    }
    render() {
        return(
            <Container fluid={true} className="container-header">
                <Row>
                    <Col md="5" className="background-landing-img">
                    </Col>
                    <Col md="7" className="background-landing">
                        <Container fluid={true}>
                            <Row>
                                <Col md={{ size: 8, offset: 2 }} >
                                    <div className="wow animated fadeInRight">
                                        <p className="text-brand-landing md-disappear">React Movie</p>
                                        <p className="text-landing">Studio Ghibli API Movies</p>
                                        <p className="title-text-landing">We provide a wide selection of films for you to enjoy with your family.</p>
                                    </div>
                                    <Row>
                                        <Col md="auto d-block text-center">
                                            <a onClick={() => scroll.scrollTo(750)}>
                                                <Button title="Started"></Button>
                                            </a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}
