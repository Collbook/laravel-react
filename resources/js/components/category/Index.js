import React, { Component } from 'react';

// using ES6 modules
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Listing from './Listing';
import Add from './Add';
import Edit from './Edit';

class Index extends Component {
    render() {
        return (
            <Router>
                <div className="container mt-3 mb-3">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <Link to="/category" className="btn btn-sm btn-primary"> Listting Category </Link>
                                <div className="pull-right">
                                <Link to="/category/add" className="btn btn-sm btn-success"> Created </Link>
                                </div>
                                </div>
                                <div className="card-body">
                                    <div>
                                        <Route exact path="/category" component={Listing} />
                                        <Route exact path="/category/add" component={Add} />
                                        <Route exact path="/category/edit/:id" component={Edit} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </Router>
        );
    }
}

export default Index;