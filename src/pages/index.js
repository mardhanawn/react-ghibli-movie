import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import WOW from 'wow.js'
import 'animate.css'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.css'

import LandingPage from './LandingPage'

new WOW().init();

function Pages() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={props => <LandingPage {...props} />} />
                    <Redirect to="/" />
                    <Redirect from="/" to="/" />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Pages
