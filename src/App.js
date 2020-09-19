import React, { Component } from 'react';
import './assets/css/style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "React Image Toggler",
        }
    }

    render() {
        return (
            <div className="bg-gray-600 text-white p-10 border text-center">
                <h1 > {this.state.title} </h1 >
            </div>
        );
    }
}

export default App;