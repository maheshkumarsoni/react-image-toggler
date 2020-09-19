import React, { Component } from 'react';
import Images from './Images';

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
        console.log('AppLifeCycle Component Mounted')
        this.setState({
            title: "Hello LifeCycle Component"
        })
    }

    render() {
        console.log('AppLifeCycle Rendered')
        return (
            <div>
                <Images />
            </div>
        );
    }
}

export default AppLifeCycle;