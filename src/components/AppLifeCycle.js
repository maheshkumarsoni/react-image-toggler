// * Functional Component

import React, { useEffect } from 'react';
import Images from './Images';

export default function AppLifeCycle() {

    useEffect(() => {
        console.log('AppLifeCycle Component Mounted');
    }, []);

    return (
        <div>
            { console.log('AppLifeCycle Rendered')}
            <Images />
        </div>
    );

}

// ! Class based Component

// import React, { Component } from 'react';
// import Images from './Images';

// class AppLifeCycle extends Component {
//     constructor(props) {
//         console.log('Constructor Called from AppLifeCycle');
//         super(props);
//         this.state = {
//             title: 'Hello React',
//             isLifeCycleShowing: false
//         };
//     }

//     componentDidMount() {
//         console.log('AppLifeCycle Component Mounted')
//         this.setState({
//             title: "Hello LifeCycle Component"
//         })
//     }

//     render() {
//         console.log('AppLifeCycle Rendered')
//         return (
//             <div>
//                 <Images />
//             </div>
//         );
//     }
// }

// export default AppLifeCycle;