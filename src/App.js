// *Function Based Component for React Hooks

import React, { useState, useEffect, useRef } from 'react';
import './assets/css/style.css';
import AppLifeCycle from './components/AppLifeCycle';

export default function App({ title }) {

    const [isImageShowing, setIsImageShowing] = useState(false);
    const mountRef = useRef(false);

    useEffect(() => {
        mountRef.current
            ? (console.log("App Component Updated"))
            : (mountRef.current = true)
    }, [isImageShowing]);

    function handleOnClickToggler() {
        setIsImageShowing(!isImageShowing);
    }

    return (
        <section className="flex justify-center">
            { console.log("App component rendered")}
            <div className="w-10/12">
                <div className="text-center">
                    <div className="my-4">
                        {title}
                    </div>
                    <button className="p-1 bg-blue-700 text-white my-2" onClick={handleOnClickToggler}>
                        Toggle Image
                    </button>
                </div>
                {
                    isImageShowing ? (
                        <AppLifeCycle />
                    ) : null
                }
            </div>
        </section>
    );
}


// !Class Based Component

// import React, { Component } from 'react';
// import './assets/css/style.css';
// import AppLifeCycle from './components/AppLifeCycle';

// class App extends Component {

//     constructor(props) {
//         console.log("App Construnctor Called")
//         super(props);
//         this.state = {
//             title: "React Image Toggler",
//             isImageShowing: false,
//         }
//         this.handleClick = this.handleClick.bind(this);
//         // * if we are not using arrow function for handleClick then we have to bind 'this' keyword to our function, to able to use 'this' keywords functionality.
//     }

//     // * we are not writing funciton keyword because we can create funciton without funciton keyword inside class components in React.
//     handleClick() {
//         console.log(`Show Image ${!this.state.isImageShowing}`);
//         this.setState({
//             isImageShowing: !this.state.isImageShowing
//         });
//     }


//     componentDidUpdate() {
//         console.log('App Component Updated');
//     }

//     render() {
//         console.log("App component rendered")
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/2">
//                     <div className="text-center">
//                         <div className="my-4">
//                             {this.state.title}
//                         </div>
//                         <button className="p-1 bg-blue-700 text-white my-2" onClick={this.handleClick}>
//                             Toggle Image
//                         </button>
//                     </div>
//                     {
//                         this.state.isImageShowing ? (
//                             <AppLifeCycle />
//                         ) : null
//                     }
//                </div>
//             </section>
//         );
//     }
// }

// export default App;