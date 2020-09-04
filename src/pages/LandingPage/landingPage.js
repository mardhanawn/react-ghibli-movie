import React, { Fragment } from 'react'

import HeaderLanding from '../../layouts/HeaderLanding'
import Poster from '../../layouts/Poster'
import Movie from '../../layouts/Movie'
import Footer from '../../layouts/Footer'

export default class LandingPage extends React.Component {
    render() {
        return (
            <Fragment>
                <HeaderLanding />
                <Poster />
                <Movie />
                <Footer />
            </Fragment>
        )
    }
}
