import React from 'react';
import { Redirect } from 'react-router-dom';

export default class BenchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            lat: this.props.lat,
            lng: this.props.lng,
            seating: 0,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        } 
    }

    handleSubmit(e){
        e.preventDefault();
        const newBench = Object.assign({}, this.state);
        this.props.createBench(newBench).then( () => {
            <Redirect to="/" />
        });
    }

    render() {
        return(
            <div>
                <br/>
                <form>
                    <label>Latitude:
                        <input type="text" value={this.props.lat} disabled />
                    </label>
                    <label>Longitude:
                        <input type="text" value={this.props.lng} disabled readOnly/>
                    </label>
                    <br/><br/>
                    <label>Description:
                        <input type="text" value={this.state.description} onChange={this.handleInput("description")} />
                    </label>
                    <label>Seating:
                        <input type="number" onChange={this.handleInput("seating")} />
                    </label>

                    <button onClick={this.handleSubmit}>Add Bench!</button>

                </form>
            </div>
        )
    }
}