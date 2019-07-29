import React, { Component } from 'react';
// es7
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// axios
import axios from 'axios';

import Pagination from "react-js-pagination";

class Listing extends Component {

    constructor(props) {

        super(props);
        //Initialize the state in the constructor
        this.state = {
            categories: [],
            activePage: 1,
            itemsCountPerPage:1,
            totalItemsCount:1,
            pageRangeDisplayed:3
        }

        this.onDelete = this.onDelete.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        //console.log(`active page is ${pageNumber}`);
        
        //this.setState({ activePage: pageNumber });
        // "first_page_url": "http://redux-start1.test/api/category?page=1",
        axios.get('http://redux-start1.test/api/category?page='+pageNumber)
        .then(response => {
            //console.log(response.data);
            this.setState({
                categories: response.data.data,

                activePage: response.data.current_page,
                itemsCountPerPage:response.data.per_page,
                totalItemsCount:response.data.total,
                pageRangeDisplayed:3
            })
        });
    }


    componentWillMount() {
        axios.get('http://redux-start1.test/api/category')
            .then(response => {
                //console.log(response.data);
                this.setState({
                    categories: response.data.data,

                    // if you dont add code this follower, 
                    // when init we will one page / 
                    activePage: response.data.current_page,
                    itemsCountPerPage:response.data.per_page,
                    totalItemsCount:response.data.total,
                    pageRangeDisplayed:3
                })
            });
    }

    onDelete(id) {
        axios.delete('http://redux-start1.test/api/category/' + id)
            .then(response => {
                // if susccess
                //console.log(response.data);
                var categories = this.state.categories;

                for (var i = 0; i < categories.length; i++) {
                    if (categories[i].id == id) {
                        categories.splice(i, 1);
                        this.setState({
                            categories: categories
                        })
                    }
                }
            });
    }

    render() {
        //console.log(this.state.categories);
        return (
            <React.Fragment>
                <table id="example" className="table table-striped table-bordered" style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map((category, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{++index}</td>
                                        <td>{category.name}</td>
                                        <td>{category.active === 1 ? "Active" : "Not Active"}</td>
                                        <td> {category.created_at} </td>
                                        <td>{category.updated_at}</td>
                                        <td>
                                            <a href="#" className="btn btn-sm btn-danger" onClick={this.onDelete.bind(this, category.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </a>

                                            <Link to={`/category/edit/${category.id}`} href="#" className="btn btn-sm btn-warning ml-2">
                                                <i className="fas fa-edit"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                <div className="d-flex justify-content-end">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}

                        onChange={this.handlePageChange}
                        activeClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Listing;