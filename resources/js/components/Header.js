import React, { Component } from 'react';

// using ES6 modules
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard';
import About from './About';
import User from './User';
import Login from './Login';
import Category from './category/Index';



class Header extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Laravel
            </Link>
            <Link className="navbar-brand" to="/home">
              
            </Link>
            <Link className="navbar-brand" to="/abouts">
              Abouts
            </Link>
            <Link className="navbar-brand" to="/users">
              Users
            </Link>
            <Link className="navbar-brand" to="/category">
              Category
            </Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* Left Side Of Navbar */}
              <ul className="navbar-nav mr-auto">
              </ul>
              {/* Right Side Of Navbar */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="navbar-brand" to="/login">
                  Login
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </nav>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/abouts" component={About} />
        <Route exact path="/users" component={User} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/login" component={Login} />
      </Router>
    );
  }
}

export default Header;