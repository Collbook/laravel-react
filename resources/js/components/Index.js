import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

// using ES6 modules
import { BrowserRouter as Router } from "react-router-dom";

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Footer />
            </React.Fragment>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('app'));
}
