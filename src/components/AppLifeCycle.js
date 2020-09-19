import React, { Component } from 'react';

class AppLifeCycle extends Component {
    constructor(props) {
        console.log('Constructor Called from AppLifeCycle');
        super(props);
        this.state = {
            title: 'Hello React',
            isLifeCycleShowing: false
        };
    }

    componentDidMount() {
        console.log('Component Mounted')
        this.setState({
            title: "Hello LifeCycle Component"
        })
    }

    render() {
        console.log('AppLifeCycle Rendered')
        return (
            <div>
                {this.state.title}
            </div>
        );
    }
}

export default AppLifeCycle;