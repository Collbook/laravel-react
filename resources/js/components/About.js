import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">About Component</div>
                            <div className="card-body">I'm an About component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;