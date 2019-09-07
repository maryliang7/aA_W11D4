import React from 'react';
import { Redirect } from 'react-router-dom';

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    };

    handleInput(type) {
        return(e) => {
            this.setState({ [type]: e.target.value })
        } 
    }
    
    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then( () => {
            <Redirect to="/" />
        });
    }

    handleErrors() {
        if (this.props.errors.length !== 0) {
            return (
                <ul>
                    {(this.props.errors.map((err, idx) => <li key={idx}> {err} </li>))}
                </ul>
            )
        }
    }

    render() {
        const display = this.props.formType === 'login' ? (
            <header>
                {/* <Link to="/signup"> Sign Up </Link> */}
                <h1>Log In!</h1>
            </header>
            ) : (
            <header>
                {/* <Link to="/login"> Log In </Link> */}
                <h1>Sign Up!</h1>
            </header>
            );


        return(
            <div>
                <div>{display}</div>
                <div>{this.handleErrors()}</div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username
                        <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput("password")}/>
                    </label>
                    <input type="submit" value="Submit!" />

                </form>
            </div>
        )
    }
}