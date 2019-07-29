import React, { Component } from 'react';

// using ES6 modules
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_name: '',
            redirect: false
        }

        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://redux-start1.test/api/category/' + this.props.match.params.id + '/edit')
            .then(response => {
                console.log(response.data);
                this.setState({
                    category_name: response.data.name
                })
            });
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value
        }, () => {
            console.log(this.state.category_name);
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const category = {
            category_name: this.state.category_name
        }

        axios.put('http://redux-start1.test/api/category/'+ this.props.match.params.id, category)
            .then(() => this.setState({ redirect: true }));

        //console.log('ok');
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/category' />;
        }
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="category">
                        <strong>Category</strong>
                    </label>
                    <input type="text" className="form-control" onChange={this.onChangeCategoryName} value={this.state.category_name} name="category_name" id="category" placeholder="Enter category" />
                    <small id="category" className="form-text text-muted">We'll never share your category with anyone else.</small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        );
    }
}

export default Edit;