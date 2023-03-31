// Homework 1 (componentDidMount)

// import React, { Component } from 'react';
//
// class Greeting extends Component {
//     componentDidMount() {
//         console.log('Hello, world!');
//     }
//
//     render() {
//         return null;
//     }
// }
//
// export default Greeting;



// Homework 2 (componentDidCatch)

// import React, { Component } from 'react';
//
// class ErrorBoundary extends Component {
//     state = {
//         hasError: false,
//     };
//
//     componentDidCatch(error, info) {
//         this.setState({ hasError: true });
//         console.error(error, info);
//     }
//
//     render() {
//         if (this.state.hasError) {
//             return <div>Что-то пошло не так...</div>;
//         }
//         return this.props.children;
//     }
// }
//
// export default ErrorBoundary;
