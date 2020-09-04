import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'
// import axios from 'axios'

import './style.css'

export default class Movie extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            movies: [],
            loading: false
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
          .then(response => response.json())
          .then(data => this.setState({ movies: data }))
          .catch(error => )
    }

    render() {
        const { movies } = this.state

        return(
            <div>
                <ul>
                    { movies.map((movie, id, description) => 
                    <li key={id}>{movie.title} {movie.description}</li> )}
                </ul>
            </div>
        )
    } */
    
    
    
    /* state = {
        data: []
    }

    async componentDidMount() {
        const urlFetch = await fetch('https://ghibliapi.herokuapp.com/films')
        if(urlFetch.status === 200 && 'json' in urlFetch) {
            this.setStateAsync({
                data: await urlFetch.json()
            })
        }
    }

    setStateAsync(state){
        return new Promise(resolve => {
            this.setState(state, resolve)
        })
    }

    render() {
        function Movie(props) {
            const renderMovieList = props.listMovie.map((data) =>
                <Col md={{ size: 7, offset: 2 }} className="card-franchise wow animated fadeInLeft" key={data.id}>
                    <Row className="align-items-center" style={{ padding: '2rem' }}>
                        <Col md="3" className="d-block text-center img-container">
                            <img className="img-franchise-M" src={data.rt_score} alt={data.title} />
                            <img className="img-franchise" src={data.director} alt={data.title} />
                        </Col>
                        <Col md={{ size: 7, offset: 1 }}>
                            <p className="title-card-franchise">{data.title}</p>
                            <p className="subtitle">{data.description}</p>
                        </Col>
                    </Row>
                </Col>
            )
            return (<Row>{renderMovieList}</Row>)
        }

        return (
            <Fragment >
                <Container fluid={true} className="container-franchise">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">Studio Ghibli API Movies</p>
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                            <p className="subtitle">We provide a wide selection of films for you to enjoy with your family. We provide a wide selection of films for you to enjoy with your family.</p>
                        </Col>
                        <Container fluid={true} className="container-card-franchise">
                            <Movie benefitFranchise />
                        </Container>
                    </Row>
                </Container>
            </Fragment>
        )
    } */
    
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
          .then(response => response.json())
          .then(data => this.setState({ movies: data }))
    }

    render() {
        const { movies } = this.state

        return(
            // { movies.map((id, title, rt_score, director, description) => 
                // <Col md={{ size: 7, offset: 2 }} className="card-franchise wow animated fadeInLeft" key={id}>
                //     <Row className="align-items-center" style={{ padding: '2rem' }}>
                        // <Col md="3" className="d-block text-center img-container">
                        //     <img className="img-franchise-M" src={rt_score} alt={title} />
                        //     <img className="img-franchise" src={director} alt={title} />
                        // </Col>
                //         <Col md={{ size: 7, offset: 1 }}>
                //             <p className="title-card-franchise">{title}</p>
                //             <p className="subtitle">{description}</p>
                //         </Col>
                //     </Row>
                // </Col>
            //     ) }
            <Fragment >
                <Container fluid={true} className="container-franchise">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">Studio Ghibli API Movies</p>
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                            <p className="subtitle">We provide a wide selection of films for you to enjoy with your family. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>
                        <Container fluid={true} className="container-card-franchise">
                        <div>
                            <ul>
                                { movies.map((movie) => 
                                <Col md={{ size: 7, offset: 2 }} className="card-franchise wow animated fadeInLeft" key={movie.title}>
                                    <Row className="align-items-center" style={{ padding: '2rem' }}>
                                        <Col md={{ size: 7, offset: 2 }}>
                                            <p className="title-card-franchise">{movie.title} - {movie.release_date}</p>
                                            <p className="subtitle-directed">Created by {movie.director} and {movie.producer}</p>
                                            <p className="subtitle">{movie.description}</p>
                                        </Col>
                                    </Row>
                                </Col> ) }
                            </ul>
                        </div>
                        </Container>
                    </Row>
                </Container>
            </Fragment>
        )
    }
} 
